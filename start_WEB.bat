@echo off
start "MyPerson Frontend" cmd /k "cd /d "%~dp0" && npm run dev"
timeout /t 3 /nobreak >nul
start http://localhost:5173