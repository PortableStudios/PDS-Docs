module.exports = (content) => {
	return `
		<div class="[ token-table-wrapper ][ full ]" tabindex="0">
			<table class="[ token-table ]">
				<thead>
					<tr>
						<th scope="col" width="30%">Token</th>
						<th scope="col" width="35%">Description</th>
						<th scope="col" width="35%">Example</th>
					</tr>
				</thead>
				<tbody>
					${content}
				</tbody>
			</table>
		</div>
	`;
};
