<script>
    let showNav = false;

    function toggleNav() {
        showNav = !showNav;
    }
</script>

<!-- LARGE SCREEN SIZES -->
<nav class="hidden md:flex items-center justify-between text-2xl xl:mx-36 lg:mx-10 md:mx-5">
    <!-- Logo -->
    <div></div> <!-- Spacer to push logo to the right -->
    <a href="https://y.luvnft.com">
        <svg width="333" height="333" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <image x="333" y="155" width="200" height="200" xlink:href="https://i.ibb.co/6W6Gz8C/LUV-NFT-23-WHITE-512.png" />
        </svg>
    </a>
    <!-- Main Links -->
    <div class="flex items-center">
        <a class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition duration-100" href="/about">About</a>
        <a class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition duration-100" href="/#blog">News</a>
        <a class="mx-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition-all duration-100" href="/#projects">Web5</a>
        <a class="ml-2 hover:border-b-2 border-spacing-3 border-indigo-500 transition-all duration-100" href="/#contact">Contact</a>
    </div>
</nav>

<!-- PHONE SCREEN SIZES -->
<nav class="md:hidden flex items-center justify-between px-3 text-lg">
    <a href="https://y.luvnft.com">
        <svg width="170" height="170" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <image x="0" y="177" width="255" height="255" xlink:href="https://i.ibb.co/6W6Gz8C/LUV-NFT-23-WHITE-512.png" />
        </svg>
    </a>
    <button class="flex flex-col py-2 pb-2 px-1" on:click={toggleNav}>
        <!-- Burger that turns into an X -->
        <div class="w-10 bg-white h-1 origin-center {showNav ? 'rotate-45 translate-y-1' : 'rotate-0 -translate-y-1.5'} transition-all"></div>
        <div class="w-10 bg-white h-1 origin-center {showNav ? 'rotate-45 translate-y-0' : 'rotate-0 '} transition-all"></div>
        <div class="w-10 bg-white h-1 origin-center {showNav ? '-rotate-45 -translate-y-1' : 'rotate-0 translate-y-1.5'} transition-all"></div>
    </button>

    {#if showNav}
        <div class="wrapper">
            <div class="mx-2 mb-4 flex flex-col text-2xl">
                <a class="underline underline-offset-2" href="/about">About</a>
                <a class="underline underline-offset-2" href="/#blog">News</a>
                <a class="underline underline-offset-2" href="/#projects">Web5</a>
                <a class="underline underline-offset-2" href="/#contact">Contact</a>
            </div>
        </div>
    {/if}
</nav>
