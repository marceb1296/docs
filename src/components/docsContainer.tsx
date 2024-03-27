import { useContext } from "react";
import { DocsContent } from "./";
import { DocsContext } from "../context";
import "../css/docsContainer.scss";
import { useComputed } from "@preact/signals-react";

export const DocsContainer = () => {
	const docs = useContext(DocsContext);

	const updateDocsContent = useComputed(() => {
		if (docs.content === undefined) return [];

		let content: Record<string, any> = {
			childs: {},
			childsKeys: [],
		};

		Object.entries(docs.content).forEach(([key, { childs }]) => {
			if (childs) {
				childs.forEach(el => {
					if (el in docs.content) {
						content = {
							...content,
							childs: {
								...content.childs,
								[key]: content.childs[key]
									? [...content.childs[key], docs.content[el]]
									: [docs.content[el]],
							},
							childsKeys: [...content.childsKeys, el],
						};
					}
				});
			}
		});

		let result = Object.entries(docs.content).map(
			([key, { title, childs, data, id }]) => {
				return {
					title,
					data,
					id,
					dataChilds: content.childs[key] ? content.childs[key] : [],

					key,
				};
			}
		);

		return result.filter(el => !content.childsKeys.includes(el.key));
	});

	console.log(updateDocsContent.value);

	return (
		<main className="docs-container">
			{updateDocsContent.value.map(
				({ id, title, data, dataChilds }, index: number) => (
					<DocsContent
						key={index}
						id={id}
						title={title}
						data={data}
						childClass=""
						dataChilds={dataChilds}
					/>
				)
			)}
		</main>
	);
};
