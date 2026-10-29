@echo off
cd /d "%~dp0\.."
py -3 tools\build_catalog.py
if errorlevel 1 (
  echo Data validation failed. Please fix the reported JSON file.
) else (
  echo Catalogue updated successfully.
)
pause
