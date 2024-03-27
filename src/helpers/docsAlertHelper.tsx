import React from "react";
import { IDocsAlerts } from "../interfaces";

const InfoIcon = () => {
	return (
		<svg
			x="0px"
			y="0px"
			width="30"
			height="30"
			viewBox="0 0 50 50">
			<path
				fill="currentColor"
				d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
		</svg>
	);
};

const WarningIcon = () => {
	return (
		<svg
			x="0px"
			y="0px"
			width="30"
			height="30"
			viewBox="0 0 492.963 492.963">
			<g fill="currentColor">
				<g>
					<path
						d="M246.458,169.582c-11.5,0-19.1,9.6-19.1,19.1v114.8c0,11.5,7.6,19.101,19.1,19.101s19.101-9.601,19.101-19.101v-114.8
			C265.559,177.182,257.958,169.582,246.458,169.582z"
					/>
					<circle
						cx="246.458"
						cy="379.982"
						r="19.1"
					/>
					<path
						d="M483.658,391.382l-206.6-334.7c-17.2-26.8-44-26.8-61.2,0l-206.5,334.7c-21,36.3-5.7,65,36.3,65h399.7
			C489.358,456.382,504.658,427.781,483.658,391.382z M451.158,437.281h-409.3c-21,0-28.7-15.3-17.2-32.5l210.4-340.399
			c5.7-11.5,17.2-11.5,24.899,0l210.4,340.399C479.858,421.981,472.158,437.281,451.158,437.281z"
					/>
				</g>
			</g>
		</svg>
	);
};

const DangerIcon = () => {
	return (
		<svg
			x="0px"
			y="0px"
			width="30"
			height="30"
			viewBox="0 0 50 50">
			<circle
				cx="25"
				cy="25"
				r="23"
				fill="red"
			/>
			<path
				fill="currentColor"
				d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z "
			/>
			<text
				fill="currentColor"
				fontSize="2px"
				style={{
					whiteSpace: "pre",
				}}
				x="25.486"
				y="24.000"
				transform="matrix(21.958294, 0, 0, 18.849676, -542.510376, -414.568176)">
				!
			</text>
		</svg>
	);
};

const icons: Record<string, React.ReactNode> = {
	info: <InfoIcon />,
	warn: <WarningIcon />,
	danger: <DangerIcon />,
};

const DocsAlert = ({ label, classType, children }: IDocsAlerts) => {
	return (
		<div className={`alert-container ${classType}`}>
			<div className="alert-header">
				<div className="icon-container">
					<span className="icon">{icons[classType]}</span>
				</div>
				<label>{label}</label>
			</div>
			<div className="alert-body">{children}</div>
		</div>
	);
};

export const DocsAlertInfo = ({ children }: { children: React.ReactNode }) => {
	return (
		<DocsAlert
			label="Note"
			classType="info">
			{children}
		</DocsAlert>
	);
};

export const DocsAlertDanger = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<DocsAlert
			label="Danger"
			classType="danger">
			{children}
		</DocsAlert>
	);
};

export const DocsAlertWarning = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<DocsAlert
			label="Warning"
			classType="warn">
			{children}
		</DocsAlert>
	);
};
