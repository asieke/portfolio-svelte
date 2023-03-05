<script lang="ts">
	import { Card } from '$components';

	//create a dummy card with fake data
	const cardData = [
		{
			title: 'New Release: Fiction',
			description:
				'Check out our latest selection of top-rated fiction books! From romance to thrillers, we have something for every book lover. Order online and get free shipping on orders over $25.',
			img: 'https://images.pexels.com/photos/1844968/pexels-photo-1844968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			href: 'https://www.example.com/fiction',
			linkText: 'Browse Books'
		},
		{
			title: 'Fitness Club Membership',
			description:
				'Get in shape and feel great with our exclusive fitness club membership! Our state-of-the-art facilities are open 24/7 and offer a wide range of cardio and weightlifting equipment, as well as group classes and personal training sessions. Sign up now and receive a free one-month trial.',
			img: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			href: 'https://www.example.com/fitness',
			linkText: 'Sign Up Now'
		},
		{
			title: 'Organic Grocery Delivery',
			description:
				'Shop for fresh, organic groceries from the comfort of your home and have them delivered straight to your doorstep! Our selection includes a variety of locally grown fruits and vegetables, dairy and meat products, and pantry essentials. Place your first order today and receive 20% off!',
			img: 'https://images.pexels.com/photos/1629781/pexels-photo-1629781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
			href: 'https://www.example.com/grocery',
			linkText: 'Shop Now'
		}
	];
</script>

<!-- create a div with tailwind that is a grid of 2 columns that becomes a grid with 1 column on small screens -->

<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
	<Card card={cardData[0]} />
	<Card card={cardData[1]} />
	<Card card={cardData[2]} />
</div>
