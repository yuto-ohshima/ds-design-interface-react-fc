import { FC } from "react";
import { User } from "./components";
import { TSampleComponent } from "../_type";

export const Sample3: FC = () => {
	return (
		<div>
			<User childrenContext={{ user: TSampleComponent.User }} />
		</div>
	)
};