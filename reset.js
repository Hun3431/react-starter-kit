const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// .git 폴더 삭제
const deleteGitFolder = () => {
  const gitFolderPath = path.join(__dirname, ".git");
  if (fs.existsSync(gitFolderPath)) {
    console.log("Deleting .git folder...");
    fs.rmSync(gitFolderPath, { recursive: true, force: true });
    console.log(".git folder deleted successfully.");
  } else {
    console.log(".git folder does not exist.");
  }
};

// Git 초기화 및 초기 커밋
const initializeGit = () => {
  try {
    console.log("Initializing new Git repository...");
    execSync("git init");
    execSync("git add .");
    execSync('git commit -m "Initial commit"');
    console.log("Git repository initialized and initial commit created.");
  } catch (error) {
    console.error("Error initializing Git repository:", error.message);
  }
};

// reset.js 파일 삭제
const deleteResetFile = () => {
  const resetFilePath = path.join(__dirname, "reset.js");
  if (fs.existsSync(resetFilePath)) {
    console.log("Deleting reset.js file...");
    fs.unlinkSync(resetFilePath);
    console.log("reset.js file deleted successfully.");
  } else {
    console.log("reset.js file does not exist.");
  }
};

// 메인 실행 함수
const main = () => {
  deleteGitFolder(); // .git 폴더 삭제
  initializeGit(); // Git 초기화 및 초기 커밋
  deleteResetFile(); // reset.js 파일 삭제
};

main();
