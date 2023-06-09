import React from "react";

const Introduction = (props) => {


	return (
		<div className="intro">
			<h1>Welcome!!</h1>
			<p>
				Thank you for participating in our experiment.
			</p>
			<p>
				In the study, you will see a series of 24 monochrome scatterplots and will be asked to conduct a single task.
			</p>
			<p>
				We will ask you to find the clusters in the scatterplot. Specifically, we will ask you to <b>lasso the clusters</b> you find using the mouse. Each lasso will represent a cluster.
				For the lasso process- click, move around the cluster and click to stop.
			</p>
			<p>
				The experiment will last less than 30 minutes (one hour). You will see 24 scatterplots, where the first four scatterplots will be included in the practice session. There will be a short interview after the experiment.
			</p>
			<p>
				We will also collect participants' non-identifying demographic information.
			</p>
			<p>
				Please press the below button to continue.
			</p>
		</div>
	)
};

export default Introduction;