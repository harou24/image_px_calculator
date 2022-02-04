import styled from "styled-components";

export const TextInput = styled.input`
	max-height: 200px;
	min-width: 40vw;
	color: white;
	background: black;
	width: 100%;
	padding: 12px 10px;
	border: 1px solid #ccc;
	border-radius: 10px;
	box-sizing: border-box;

	::placeholder {
		color: #fff;
		font-size: 14px;
	}

	&:focus {
		color: #fff;
		border: 1px solid #3f3fff;
		box-shadow: none;
	}
`;