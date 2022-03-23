/*
myModule 변수는 exported API만 포함하고 있으며,
모듈 내용의 나머지 부분은 사실상 외부에서 접근이 불가능하다.
*/

const myModule = (() => {
	const privateFunc = () => {};
	const privateData = [];

	const exported = {
		publicFunc: () => {},
		publicFunc2: () => {},
	};

	return exported;
})(); // 함수를 호출

console.log(myModule);
console.log(myModule.privateFunc, myModule.privateData);
