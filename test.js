const config = {
	top: "unset",
	bottom: "15px",
	left: "unset",
	right: "15px",
	imgTitlePrefix: "Türkiye Cumhuriyeti",
	disabled: false,
};

const tsd = new TSD(config);

console.log(tsd.testAvabileDays());
