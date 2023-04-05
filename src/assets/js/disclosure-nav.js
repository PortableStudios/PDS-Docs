class DisclosureNav {
	constructor(domNode) {
		this.rootNode = domNode;
		this.controlledNodes = [];
		this.openIndex = null;
		this.topLevelNodes = [
			...this.rootNode.querySelectorAll(
				".disclosure-nav-list > li > a, .disclosure-nav-list > li > button, .disclosure-nav-list > li > :not(ul) > a, .disclosure-nav-list > li > :not(ul) > button"
			),
		];

		this.topLevelNodes.forEach((node) => {
			// handle button + nav list
			if (
				node.tagName.toLowerCase() === "button" &&
				node.hasAttribute("aria-controls")
			) {
				const listId = node.getAttribute("aria-controls");
				const navList = node.parentNode.parentNode.querySelector(
					`ul#${listId}`
				);
				if (navList) {
					// save ref controlled nav list
					this.controlledNodes.push(navList);

					// collapse nav lists
					node.setAttribute("aria-expanded", "false");

					// attach event listeners
					navList.addEventListener("keydown", this.onNavListKeyDown.bind(this));
					node.addEventListener("click", this.onButtonClick.bind(this));
					node.addEventListener("keydown", this.onButtonKeyDown.bind(this));
				}
			}
			// handle links
			else {
				this.controlledNodes.push(null);
				node.addEventListener("keydown", this.onLinkKeyDown.bind(this));
			}
		});

		this.rootNode.addEventListener("focusout", this.onBlur.bind(this));
	}

	// public function to close open nav list
	close() {
		this.toggleExpand(this.openIndex, false);
	}

	onBlur(event) {
		let navListContainsFocus = this.rootNode.contains(event.relatedTarget);
		if (!navListContainsFocus && this.openIndex !== null) {
			this.toggleExpand(this.openIndex, false);
		}
	}

	onButtonClick(event) {
		let button = event.target;
		let buttonIndex = this.topLevelNodes.indexOf(button);
		let buttonExpanded = button.getAttribute("aria-expanded") === "true";
		this.toggleExpand(buttonIndex, !buttonExpanded);
	}

	onButtonKeyDown(event) {
		// close on escape
		if (event.key === "Escape") {
			this.toggleExpand(this.openIndex, false);
		}
	}

	onLinkKeyDown(event) {
		// close on escape
		if (event.key === "Escape") {
			this.toggleExpand(this.openIndex, false);
		}
	}

	onNavListKeyDown(event) {
		if (this.openIndex === null) return;

		// close on escape
		if (event.key === "Escape") {
			this.topLevelNodes[this.openIndex].focus();
			this.toggleExpand(this.openIndex, false);
		}
	}

	toggleExpand(index, expanded) {
		// close open nav list, if applicable
		if (this.openIndex !== index) {
			this.toggleExpand(this.openIndex, false);
		}

		// handle nav list at called index
		if (this.topLevelNodes[index]) {
			this.openIndex = expanded ? index : null;
			this.topLevelNodes[index].setAttribute("aria-expanded", expanded);
		}
	}
}

/* Initialize Disclosure Nav Lists */
window.addEventListener(
	"load",
	function () {
		let navLists = document.querySelectorAll(".disclosure-nav");
		let disclosureNavLists = [];

		for (let i = 0; i < navLists.length; i++) {
			disclosureNavLists[i] = new DisclosureNav(navLists[i]);
		}
	},
	false
);
