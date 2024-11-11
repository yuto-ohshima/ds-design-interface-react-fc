import { FC } from "react";
import { User } from "./components";
import { TSampleComponent } from "../_type";

export const Sample1: FC = () => {
	return (
		<div>
			<User user={TSampleComponent.User} />
		</div>
	)
};