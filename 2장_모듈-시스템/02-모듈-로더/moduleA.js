// 다른 종속성 모듈 로드
const dependency = require("./moduleB");

// private 함수
function logDependency() {
	console.log(`종속성 로그: ${dependency.username}`);
}

// 공개적으로 사용되기 위해 익스포트되는 API
module.exports = {
	run: () => {
		dependency.log();
	},
	logDependency,
};
