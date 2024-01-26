<!-- Note for this, for some reason, you need to use translate-y-[..rem] for phone sizes. Not sure why but ok..
	wait but it works for one of them. I'm so confused...
-->
<script>
    // You know, the classic
    const sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    //Initialize important values
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = "";
    let phoneNumber = "";
    let subscribeAnimation = false;
    let title = "Subscribe";
    let message = "Stay up to date on new blog posts!";
    let hideExtras = false;
    let showEmailError = false;
    let showPhoneError = false;
    export let forPost = false;

    //Change title If I want. It looks good without changing though
    $: if (hideExtras) {
        title = "Subscribed!";
    } else {
        title = "Get Notified";
    }

    //Send request
    function subscribeClicked() {
        if (validatePhoneNumber() == false) {
            return;
        }
        const payload = {
            phoneNumber: phoneNumber,
        };
        fetch("/api/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then((response) => response.json())
            .then((data) => {})
            .catch((error) => {
                console.error(error);
            });
        phoneNumber = "";
        if (!forPost) {
            animate();
        } else {
            title = "Subscribed!";
            message = "Thanks, welcome to the club!";
        }
    }

    function validatePhoneNumber() {
        showPhoneError = false;
        // Add your phone number validation logic here
    }

    async function animate() {
        subscribeAnimation = true;
        hideExtras = true;
        await sleep(1200);
        subscribeAnimation = false;
        await sleep(600);
        hideExtras = false;
    }
</script>

<div class="flex-col justify-center items-center">
    <div class="flex flex-col pt-4 items-center justify-center">
        <!-- NOTIFY ANIMATION... LOTS OF DIVS -->
        <div class="poppins xl:text-5xl text-4xl relative font-extrabold">
            <h4 class="outline-text text-indigo-100">{title}</h4>
            <div
                class="absolute inset-0 translate-y-3 bg-indigo-300 rounded-xl text-transparent bg-clip-text {subscribeAnimation ? 'lg:translate-y-[2.5rem] translate-y-[1.5rem] bg-opacity-100' : 'bg-opacity-50 translate-y-[.5rem]'} transition-all duration-700 -z-10"
            >
                <p>{title}</p>
            </div>
            <!-- Add other animation divs here -->
        </div>
        
        <form action="POST" class="mt-8 w-full flex flex-col justify-center items-center">
            <input
                bind:value={phoneNumber}
                type="tel"
                name="phoneNumber"
                placeholder="Your phone number here"
                class="{hideExtras ? 'opacity-0' : 'opacity-100'} drop-shadow-md z-20 transition-all duration-75 lg:p-2 mt-2 p-1 w-full placeholder:text-neutral-600/90 placeholder:text-center font-sans text-xl rounded-t-md focus:placeholder:opacity-0 text-neutral-900 focus:outline-none"
            />
            <button
                on:click|preventDefault={subscribeClicked}
                class="{hideExtras ? 'opacity-0' : 'opactiy-100'} transition-all duration-75 lg:p-2 p-1 bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-md shadow-black hover:text-white w-full font-sans text-xl rounded-b-md"
            >
                Subscribe!
            </button>
            <!-- Message not even necessary but we leave it JIC -->
            <p class="text-sm lg:text-md text-center mx-4 transition-all duration-75 font-semibold {hideExtras ? 'opacity-0' : 'opacity-100'}">
                No spam, just thought provoking posts
            </p>
        </form>
        {#if showPhoneError}
            <p class="text-red-500 text-sm">Enter Valid Phone Number</p>
        {/if}
    </div>
</div>
