#!/usr/bin/env pwsh

Set-StrictMode -Version latest
$ErrorActionPreference = "Stop"

# Get component data and set necessary variables
$component = Get-Content -Path "./component.json" | ConvertFrom-Json
$testImage="$($component.registry)/$($component.name):$($component.version)-$($component.build)"

# Set environment variables
$env:IMAGE = $testImage

try {
    # Workaround to remove dangling images
    docker-compose -f ./docker/docker-compose.yml down

    docker-compose -f ./docker/docker-compose.yml up --build --abort-on-container-exit --exit-code-from test

    # Save the result to avoid overwriting it with the "down" command below
    $exitCode = $LastExitCode 
} finally {
    # Workaround to remove dangling images
    docker-compose -f ./docker/docker-compose.yml down
}

# Return the exit code of the "docker-compose.yml up" command
exit $exitCode 
