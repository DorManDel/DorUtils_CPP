
## 📁 First check Path 📁 :
```bash
cd /mnt/<drive_letter>/<rest of the path...>
```
### Check you’re in the right place ✅ :
```bash
pwd
ls
```
 * Then run 🏃🏻‍♂️ :
```bash
make help
make tests
make run file=common_test
```
## Useful WSL commands 🐧:
```bash
pwd                 # show current folder
ls                  # list files
ls -la              # list files with details + hidden files
cd folder_name      # enter folder
cd ..               # go one folder back
clear               # clean terminal
code .              # open current folder in VS Code
make help           # show Makefile commands
make clean          # delete build folder
make tests          # build tests
make examples       # build examples
```
Windows drives in WSL:
```
C: -> /mnt/c
D: -> /mnt/d
```
So your Windows path:
```
D:\Programming\Scripts\Dor\DorUtils_CPP
```
becomes:
```
/mnt/d/Programming/Scripts/Dor/DorUtils_CPP
```