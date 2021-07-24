import { Button } from "evergreen-ui";
import React from "react";
import { CustomBtnProps } from "../../Interfaces/shared";

export default function SubmitBtn(props: CustomBtnProps) {
	return <Button {...props}>{props.btnText}</Button>;
}
