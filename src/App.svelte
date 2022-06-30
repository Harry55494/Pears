<script>
	import { pairs } from './stores.js';
	import { get } from 'svelte/store';
	console.log(get(pairs));

	function addPair(key, value, tags = []) {

		const entries = get(pairs);
		for (let i = 0; i < entries.length; i++) {
			if (entries[i].key === key) {
				alert('A pair with the key ' + key + ' already exists');
				return;
			}
		}

		pairs.update(pairs => {
			return [...pairs, { key, value, tags}];
		});
		window.location.reload();
	}

	function removePair(key) {
		pairs.update(pairs => {
			return pairs.filter(pair => pair.key !== key);
		});
		window.location.reload();
	}


</script>

<main>
	<div align="center">
		<img src = "PearsTitle.png" alt="" draggable="false" width = 600 height = 200/>
	<p>A simple app to remember key-value pairs</p>
		<br />
		<br />
	</div>

	<div align="center">
		<table>
			<tr>
				<th>Key</th>
				<th>Value</th>
				<th>Tags</th>
			</tr>
			{#each get(pairs) as pair}
				<tr>
					<td>{pair.key}</td>
					<td>{pair.value}</td>
					<td>{pair.tags}</td>
				</tr>
			{/each}
			<tr>
				<td>
					<input type="text" id="key" placeholder="key" />
				</td>
				<td>
					<input type="text" id="value" placeholder="value" />
				</td>
				<td>
					<input type="text" id="tags" placeholder="tag1,tag2" />
				</td>
				<td>
					<button on:click={() => addPair(document.getElementById('key').value, document.getElementById('value').value, document.getElementById('tags').value.split(','))}>Add</button>
					<button on:click={() => removePair(document.getElementById('key').value)}>Remove</button>
				</td>
			</tr>
		</table>
	</div>

</main>

<style>

	:global(body) {
		background-color: #343B42;
		color: white;
		user-select: none;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: rgb(125, 217, 139);
		text-transform: uppercase;
		font-size: 6em;
		font-weight: 100;
	}

	input {
		width: 100%;
		padding: 0.5em;
		border: none;
		border-bottom: 1px solid white;
		background-color: transparent;
		color: white;
		font-size: 1.2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>