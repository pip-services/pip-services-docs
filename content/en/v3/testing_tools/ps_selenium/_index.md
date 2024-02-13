---
type: docs
title: "Selenium WebDriver module for PowerShell"
linkTitle: "PowerShell Selenium"
gitUrl: "https://github.com/pip-devs/pip-selenium-ps"
no_list: true
weight: 20
---

Our team uses Powershell for system testing and automation. Selenium is a popular testing framework for web applications. It supports many programming languages, except for Powershell. So, we decided to implement our own PowerShell driver for Selenium and share it with you.

PowerShell module provides interface for [Selenium WebDriver](https://www.selenium.dev/). It can be used for testing web pages or automation of legacy web applications.

The module allows to perform most operations supported by .NET web driver:

- Start and stop driver, managing open sessions
- Open pages, reading page title or source
- Find one or multiple elements by id, name, css selector or xpath
- Navigate back and forth browser history
- Switch between page frames
- Send clicks or keystrokes, submit forms
- Manage alert popups

Example of use:

```ps1
# Load selenium module
Import-Module pip-selenium-ps

# Create a new instance of the Chrome driver
Start-SeDriver -Type Chrome

# And now use this to visit Google
Open-SePage -Url http://www.google.com

# Find the text input element by its name
$element = Find-SeElement -Name q

# Enter something to search for
Send-SeKeys -Element $element -Keys Cheese!

# Now submit the form. WebDriver will find the form for us from the element
Submit-SeForm -Element $element

# Check the title of the page
Write-Host "Page title is: $(Get-SePageTitle)"

# Google's search is rendered dynamically with JavaScript.
# Wait for the page to load, timeout after 10 seconds
Wait-SeElement -PartialTitle cheese! -Seconds 10

# Close the browser
Stop-SeDriver

```