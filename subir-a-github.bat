@echo off
echo ========================================
echo   Auto Consultant - Subir a GitHub
echo ========================================
echo.

cd /d "%~dp0"

echo [1] Iniciando repositorio git...
git init

echo.
echo [2] Configurando usuario git...
git config user.name "Auto Consultant"
git config user.email "Auto_consultant@hotmail.com"

echo.
echo [3] Configurando repositorio remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/AutoConsultant/auto-consultant.git

echo.
echo [4] Agregando archivos...
git add .

echo.
echo [5] Creando commit...
git commit -m "Actualizacion sitio web" 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo No hay cambios nuevos, se usara commit vacio...
    git commit --allow-empty -m "Actualizacion sitio web"
)

echo.
echo [6] Configurando rama gh-pages...
git branch -M gh-pages

echo.
echo [7] Subiendo a GitHub...
git push -u origin gh-pages --force

echo.
echo ========================================
if %ERRORLEVEL% EQU 0 (
    echo   LISTO - Cambios subidos exitosamente
    echo   Tu sitio se actualiza en 1-2 minutos
) else (
    echo   ERROR al subir. Si pide usuario y
    echo   contrasena, usa un Personal Access
    echo   Token de GitHub como contrasena.
    echo   github.com - Settings - Developer settings
    echo   - Personal access tokens - Tokens classic
)
echo ========================================
echo.
pause
