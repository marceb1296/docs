import React, { Fragment } from "react";
import { IDocsContent } from "../interfaces";
import "../css/docsContent.scss";
import "../css/docsAlerts.scss";

const childClassStr = "element-child";

export const DocsContent = ({
	id,
	title,
	data,
	childClass,
	dataChilds,
	subTitle,
}: IDocsContent & {
	dataChilds: IDocsContent[];
	subTitle?: boolean;
	childClass?: string;
}) => {
	return (
		<section
			id={id}
			className={`docs-section ${childClass !== "" ? childClass : ""}`}>
			{data !== undefined ? (
				<>
					{subTitle ? <h3>{title}</h3> : <h2>{title}</h2>}
					{data.length !== 0 &&
						data.map((el, index) =>
							typeof el === "string" ? (
								<p key={index}>{el}</p>
							) : (
								<Fragment key={index}>
									{el}{" "}
									{dataChilds.length > 0 &&
										dataChilds.map((el, index: number) => (
											<DocsContent
												key={`${el.title}-${index}`}
												{...el}
												dataChilds={[]}
												childClass={childClassStr}
												subTitle={true}
											/>
										))}
								</Fragment>
							)
						)}
				</>
			) : (
				<>
					{subTitle ? <h3>{title}</h3> : <h2>{title}</h2>}

					{dataChilds.length > 0 &&
						dataChilds.map((el, index: number) => (
							<DocsContent
								key={`${el.title}-${index}`}
								{...el}
								dataChilds={[]}
								childClass={childClassStr}
								subTitle={true}
							/>
						))}
				</>
			)}
		</section>
	);
};
