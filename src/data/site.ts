import vacuuming from '../assets/photos/vacuuming.jpg';
import wipingTable from '../assets/photos/wiping-table.jpg';
import windowCleaning from '../assets/photos/window-cleaning.jpg';
import mopping from '../assets/photos/mopping.jpg';
import sprayBottle from '../assets/photos/spray-bottle.jpg';

// Business details used across the site. Edit these first.
export const site = {
	name: 'Sparkle Clean Co.',
	tagline: 'Reliable home and office cleaning you can count on.',
	phone: '(555) 123-4567',
	email: 'hello@example.com',
	hours: 'Mon–Sat, 8am–6pm',
	serviceAreas: ['Downtown', 'Northside', 'Riverside', 'West Hills', 'Lakeview', 'Eastgate'],
	heroImage: vacuuming,
	heroImageAlt: 'A person vacuuming a bright, tidy living room',
};

// Stock photos are free-to-use Unsplash images; see src/assets/photos/CREDITS.md.
export const services = [
	{
		name: 'Standard Clean',
		price: 'From $120',
		description: 'Dusting, vacuuming, mopping, kitchen and bathroom surfaces. Ideal for regular upkeep.',
		image: wipingTable,
		imageAlt: 'A cleaner in yellow gloves wiping down a table',
	},
	{
		name: 'Deep Clean',
		price: 'From $240',
		description: 'Everything in a standard clean plus baseboards, inside appliances, grout, and hard-to-reach areas.',
		image: windowCleaning,
		imageAlt: 'A cleaner in gloves and goggles scrubbing a window frame',
	},
	{
		name: 'Move In / Move Out',
		price: 'From $300',
		description: 'A top-to-bottom clean of an empty home so it is ready for the next chapter.',
		image: mopping,
		imageAlt: 'A cleaner mopping the floor of a bright, empty room',
	},
	{
		name: 'Office Cleaning',
		price: 'Custom quote',
		description: 'Recurring cleaning for small offices, scheduled around your business hours.',
		image: sprayBottle,
		imageAlt: 'A gloved hand holding a spray bottle of cleaner',
	},
];
