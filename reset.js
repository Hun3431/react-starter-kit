import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// .git 폴더 삭제
const deleteGitFolder = () => {
  const gitFolderPath = path.join(process.cwd(), ".git");
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
    execSync("git add ."); // 모든 파일 스테이징
    execSync("git reset reset.js"); // reset.js 파일을 스테이징에서 제외
    execSync('git commit -m "Initial commit"'); // reset.js 파일 없이 커밋
    console.log("Git repository initialized and initial commit created.");
  } catch (error) {
    console.error("Error initializing Git repository:", error.message);
  }
};

// reset.js 파일 삭제
const deleteResetFile = () => {
  const resetFilePath = path.join(process.cwd(), "reset.js");
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
