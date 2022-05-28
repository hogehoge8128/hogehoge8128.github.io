<script lang="ts">
 import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte'
 import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte'
 export let name: string;
 export let iconSrc: string;
</script>

<main>
 <div class="container">
  <img class="iconImg" src={iconSrc} alt="hogehoge icon" />
  <h1 class="name">{name}</h1>
  <div class="icon-container">
   <a class="icon" href="https://github.com/hogehoge8128" aria-label="github">
    <FaGithubSquare />
   </a>
   <a class="icon" href="https://twitter.com/hogehoge8128" aria-label="twitter">
    <FaTwitterSquare />
   </a>
  </div>
 </div>
 <div class="overlay"></div>
 <div class="overlay glitch"></div>
</main>

<style>
	main {
		text-align: center;
		padding: 4rem 1rem;
		margin: 0 auto;
	}

 .container {
  position: absolute;
  z-index: 2;
  width: calc(100% - 2rem);
 }

 .iconImg {
  width: 15em;
  height: 15rem;
  object-fit: contain;
 }

 .icon-container {
  width: 100%;
  display: flex;
  justify-content: center;
 }

 .icon {
  padding: 0;
  //background: white;
  border-radius: 10px;
  color: white;
  width: 100px;
  height: 100px;
 }

	.name {
  color: white;
		text-transform: uppercase;
		font-size: 3rem;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

 .overlay {
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: calc(100% - 0.1rem);
  height: 100%;
  background-color: transparent;
  background-size: 5px 5px, 5px 5px;
  background-position:  -1px -1px, -1px -1px;
  background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
  mix-blend-mode: difference;
 }

 .glitch {
  clip-path: polygon(0 0, 100% 0, 100% .5em, 0 .5em);
  animation: glitch 10s linear infinite;
  transform: translatex(.1rem);
 }

 @keyframes glitch {
  to {
   clip-path: polygon(0 calc(100% - .5em), 100% calc(100% - .5em), 0 100%, 0 100%)
  }
 }
</style>
