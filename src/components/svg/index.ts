/* zsh script to generate this file:
files=(src/components/svg/*.svelte); array=(); for file in "${files[@]}"; do array+=("$(basename "$file" .svelte)"); done; output=""; for i in "${array[@]}"; do output+="import $i from './$i.svelte';"; done; output+="export{"; for i in "${array[@]}"; do output+=" $i,"; done; output+="};"; echo "$output" | pbcopy
*/
import ArrowLeft from './ArrowLeft.svelte';
import ChartPie from './ChartPie.svelte';
import Gauge from './Gauge.svelte';
import Graph from './Graph.svelte';
import Hamburger from './Hamburger.svelte';
import Harvest from './Harvest.svelte';
import Rocket from './Rocket.svelte';
import Stack from './Stack.svelte';
import Star from './Star.svelte';
import Sun from './Sun.svelte';

export { ArrowLeft, ChartPie, Gauge, Graph, Hamburger, Harvest, Rocket, Stack, Star, Sun };
