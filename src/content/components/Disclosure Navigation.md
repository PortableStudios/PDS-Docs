---
title: Disclosure Navigation
date: 2023-04-03
tags:
  -
eleventyNavigation:
  order: 1
---

<nav aria-label="Example" class="disclosure-nav">
	<ul class="disclosure-nav-list">
		<li>
			<a href="#" id="id_0_link">Link</a>
		</li>
		<li>
			<button
				type="button"
				aria-expanded="true"
				aria-controls="id_1_list"
			>
				<span>Button</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-chevron-down"
					data-icon
					aria-hidden="true"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<ul id="id_1_list">
				<li>
					<a href="#">Nested link 1</a>
				</li>
				<li>
					<a href="#">Nested link 2</a>
				</li>
				<li>
					<a href="#">Nested link 3</a>
				</li>
				<li>
					<a href="#">Nested link 4</a>
				</li>
				<li>
					<a href="#">Nested link 5</a>
				</li>
				<li>
					<a href="#">Nested link 6</a>
				</li>
			</ul>
		</li>
		<li>
			<a href="#" id="id_2_link">Link + button</a>
			<button
				type="button"
				aria-labelledby="id_2_link"
				aria-expanded="true"
				aria-controls="id_2_list"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-chevron-down"
					data-icon
					aria-hidden="true"
				>
					<polyline points="6 9 12 15 18 9"></polyline>
				</svg>
			</button>
			<ul id="id_2_list">
				<li>
					<a href="#">Nested link 7</a>
				</li>
				<li>
					<a href="#">Nested link 8</a>
				</li>
				<li>
					<a href="#">Nested link 9</a>
				</li>
				<li>
					<a href="#">Nested link 10</a>
				</li>
				<li>
					<a href="#">Nested link 11</a>
				</li>
				<li>
					<a href="#">Nested link 12</a>
				</li>
			</ul>
		</li>
	</ul>
</nav>
