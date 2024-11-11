/**
 * @memo components/** でのみ参照される
 */

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace TSampleComponent {
	export type User = {
		id: string;
		permission: "Admin" | "Basic" | "Guest";
		name: string;
		nameKana: string;
		age: number;
	};
	export const User: User = {
		id: "2024-11-11#001",
		permission: "Admin",
		name: "山田太郎",
		nameKana: "やまだたろう",
		age: 30,
	};
};