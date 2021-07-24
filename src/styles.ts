import styled from "styled-components";

const Main = styled.div`
	background: linear-gradient(45deg, #000000bf, #000000de),
		url("https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/6ef143c5-7908-4b24-9831-a74f19b08176/IL-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	color: white;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
`;

const Container = styled.div`
	max-width: 700px;
	padding: 20px;
	min-width: 400px;
	text-align: center;
	@media only screen and (max-width: 600px) {
		width: 100%;
		min-width: 100%;
	}
`;

export { Main, Container };
