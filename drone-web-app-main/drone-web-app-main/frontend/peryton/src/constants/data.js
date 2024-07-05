import { FaMap, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoFlower, IoLocationSharp } from "react-icons/io5";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

export const products = [
  {
    id: 1,
    name: "DJI Mavic 3 Pro",
    description:
      "Capture stunning aerial photos and videos with the DJI Mavic 3 Pro, a powerful and versatile camera drone. Featuring a Hasselblad L2D-20c camera with a 4/3 CMOS sensor, it delivers exceptional image quality with vivid colors and incredible detail.",
    price: 1599,
    image:
      "https://www.shutterhouse.lk/wp-content/uploads/2023/05/cab2d9720f2e4d8308b34b29f55fd13b@ultra.jpg",
    coverImage:
      "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/2023/05/dji-mavic-3-pro-36.jpg",
    category: "Camera Drone",
  },
  {
    id: 2,
    name: "DJI Air 2S",
    description:
      "The DJI Air 2S is a compact and foldable camera drone that offers excellent image quality and performance. With a 1-inch CMOS sensor and the ability to record 5.1K video, it's a great choice for photographers and videographers alike.",
    price: 999,
    image:
      "https://s3-ap-southeast-1.amazonaws.com/media.cameralk.com/7621/DJI-Air-2S-Fly-More-Combo-Drone1.jpg",
    coverImage:
      "https://dji-official-fe.djicdn.com/dps/01eb6d7b120bfd9da1e73149c7c2c2f4.jpg",
    category: "Camera Drone",
  },
  {
    id: 3,
    name: "DJI Mini 3 Pro",
    description:
      "The DJI Mini 3 Pro is an ultralight camera drone that weighs less than 249 grams, making it exempt from certain drone regulations in many countries. It features a 1/3-inch CMOS sensor and can record 4K HDR video, making it a great option for capturing stunning aerial footage on the go.",
    price: 699,
    image:
      "https://s3-ap-southeast-1.amazonaws.com/media.cameralk.com/10221/1652172384_1700260.jpg",
    coverImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCtCwvRcYrc56Bt-lY2yvGUA3Dz3z3Rfw9A&usqp=CAU",
    category: "Camera Drone",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaMap />,
    title: "3D Mapping",
  },
  {
    id: 2,
    icon: <IoFlower />,
    title: "Flower Dropping",
  },
  {
    id: 3,
    icon: <FaWandMagicSparkles />,
    title: "Light Shows",
  },
];

export const customers = [
  {
    id: 1,
    name: "startupindia",
    image: "imgs/pngegg.png",
  },
  {
    id: 2,
    name: "Dassault Systems",
    image: "imgs/dassault.png",
  },
  {
    id: 3,
    name: "DST NIDHI",
    image: "imgs/DST-NIDHI.png",
  },
];

export const blogData = [
  {
    id: 1,
    category: "AI & TECH",
    title:
      "AI in agriculture: How crops, animals, drones, and satellites get along",
    image: "https://i.postimg.cc/9QfkWZJD/pexels-tom-fisk-1595108-1.jpg",
    author: "PERYTON TECH",
    author_image: "https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
    date: "JUNE 15, 2024",
    content: `
    <p>
    “All you need is (love) AI in agriculture.” — A slightly changed Beatles quote.

Modern-day farming gets smarter by the day: a symbiosis of cows and drones has never felt so natural and necessary. And surely it means that AgriTech creates more and more data while automating greenhouses through IoT, monitoring field variability in precision agriculture solutions, and so on. But have you ever felt like there must be something else this vast data collection can do? Something far bolder and way more ambitious? Well, we here at ITRex have, and our <b>AI consulting team</b> believes that this data is dying to jump into an artificial intelligence solution and get agricultural companies more business insights. To prove our point, there’s no use in trying to dazzle you with random examples of how companies already use AI in agriculture because that won’t give you a true understanding of what this impressive piece of tech can do for agribusinesses. Instead, let’s see how basic agricultural processes in crop and animal farming can be enhanced with artificial intelligence, what benefits it brings, and what common misconceptions we need to steer clear of.
</p>

<h2>Benefits of AI in agriculture</h2>

<p>
Before we start, let’s make it clear that artificial intelligence is not an annoying know-it-all tech. It only provides businesses with insights that stem from the data they already have — or automates processes that previously required human involvement. We’ll examine how it happens later on, and now let’s look at top four benefits that make agricultural AI a promising investment:
</p>

<ul>

<li>
Yield improvement. By analyzing operational data and highlighting process inefficiencies, artificial intelligence finds ways for agribusinesses to increase yields without using any extra resources. Automating crop and animal farming processes with drones (e.g., used for sowing or milking), eliminates human error and streamlines those processes to allow an increase in both quantity and quality of labor.
</li>

<li>
Cost reduction. Crunching the numbers on how resources (water, energy, fertilizer, herbicide, etc.) are distributed and used, AI solutions spot wasteful resource consumption patterns and suggest optimization scenarios. Costs like vet services and equipment repairs are reduced by preventive practices of monitoring livestock health and equipment performance respectively.
</li>

<li>
Profit increase. Given that AI maximizes yields without requiring farms to use any additional resources and cuts costs associated with various stages of agricultural processes, an increase in profits follows as a natural and pleasant consequence of employing AI in agriculture.
</li>

<li>
Alignment with sustainable farming practices. The concept of sustainable agriculture revolves around finding a way to meet current food and textile needs without using up too many resources and leaving next generations with nothing. AI helps farmers find sustainable patterns of resource consumption to avoid water scarcity and land degradation.
</li>

</ul>

<h2>How AI use cases enhance basic agricultural processes</h2>

<p>
As an intricate technology with multiple subsets and types, artificial intelligence can provide agriculture with algorithms and applications of varying levels of complexity. For example, you can use AI in agriculture for something as simple as monitoring livestock vitals to identify health problems. Or you can employ computer vision and classify tomatoes by variety using machine learning. Or you can go even further and predict weather using deep learning. If you do, AI will uncover weather patterns in historical data from satellites and sensors and spot pre-weather-change markers in real-time data to warn farmers about upcoming rains or storms. All in all, the tasks that AI carries out in agriculture can be boiled down to workflow automation (using robots to carry out tasks that previously involved humans), data analytics (revealing inefficiencies by analyzing operational data), and personalization (growing sales by better adapting to demand). It may not seem like much but you can do a lot with a little. To get a better idea, let’s look at the basic processes of crop growing and livestock care.
</p>

<h2>
Artificial intelligence and soil preparation
</h2>

<p>
By analyzing data coming from sensors placed in the soil, supplied by soil analysis drones, or sourced from smartphone cameras, an AI solution like Plantix can detect soil defects and recognize nutrient deficiencies. This helps farmers identify how much and what type of organic matter they should add to make the soil more workable and suitable for the given crop.
</p>

<h2>
Artificial intelligence and sowing
</h2>

<p>
Analyzing drone-supplied imagery, artificial intelligence can help farm workers identify places best suited for sowing particular crops based on geographical characteristics of the field, chemical composition of the soil, or any other parameter. Besides that, farmers can use AI-powered crop planning tools like eAgronom to determine how much of each crop the farm needs to sow in a greenhouse per week, when the crops should be transplanted in the field, etc. Although a comprehensive crop plan goes way beyond the sowing process alone, it is still nice to know that by using such tools farmers can reduce herbicide and fertilizer consumption by 25–35% and increase yield by 3–4%. Before sowing begins, AI can also examine seed photos and compare them to images of healthy seeds; a supervised machine learning algorithm will determine seed quality and figure out what crops they are seeing. Using this data, AI algorithms can instruct farming robots (like a computer-vision seed sorter developed by the Agricultural Research Service of the US Department of Agriculture) to filter out subpar seeds or sort seeds if they get mixed.
</p>

<h2>
Artificial intelligence and fertilizing
</h2>

<p>
Artificial intelligence systems — especially smart applications running on devices rather than in the cloud — require powerful chips. Unfortunately, for decades, the lion’s share of computer chips have been manufactured in With the help of data from precision agriculture software, soil sensors, soil analysis drones, or simply smartphone images in case of Spacenus’s Agricultural Nutrient Assistant, agriculture artificial intelligence solutions can continuously monitor nutrition levels in the soil and, if needed, cross-check them with the levels that historically brought the best yields on the given crop. To make farming more sustainable, AI can use third-party datasets to check the environmental effects of using various amounts and types of fertilizer to find such a dosage that will minimize negative impact while maximizing yield. If the soil needs fertilizer, the artificial intelligence solution can recommend the best-suited fertilizer that the agribusiness has in stock at the moment using sensors in storage rooms and dispatch, say, a PrecisionHawk drone to spray it on the field.
</p>


<h2>Artificial intelligence and irrigation</h2>

<p>
The concept of sustainable farming requires smart usage of freshwater. And this is where AI tools like Heliopas, CultYvate, and WaPOR come in handy. Some of them simply monitor water usage productivity, others automate irrigation workflows. But you can go further and use AI capabilities to analyze historical irrigation data, map it against crop health and yield stats, and find the best water consumption patterns that fulfill all required conditions. Using weather prediction capability provided by solutions like Fasal, farms can alter their irrigation plans making use of free rain water (checking its quality is also a possibility for AI in agriculture). Together with adjusted irrigation plans based on soil moisture monitoring, it can save farms up to 50% of water resources. Not bad, right? Similar mechanisms can be applied to energy consumption optimization as well. This way, an agricultural company can reduce water and energy-related costs without sacrificing productivity.
</p>


<h2>Artificial intelligence and crop protection</h2>

<p>
This is the area where AI offers perhaps the most use cases for an agriculture business to enjoy. For example:
</p>

<ul>

<li>
Herbicide and pesticide consumption optimization is aimed at making farms sustainable and efficient while securing food safety. AI solutions detect current weed and pest activity and adjust herbicide and pesticide spraying activities to it instead of running these processes on a fixed schedule. This is enabled by companies like Blue River Technologies and PyTorch that focus on weed control, as well as companies like FarmSense and mobile apps like Nuru (delivered by the Food and Agriculture Organization of the United Nations and Pennsylvania State University), which take over pest control.
</li>

<li>
Pest attack prediction is achieved by analyzing satellite or drone imagery, uncovering patterns in pest activity, and watching new incoming data to notice pre-attack signs. With this data at hand, farmworkers can prevent attacks without affecting crop health or using pesticides. For example, an early pest warning system by Wadhwani AI is used in India for cotton crop protection.
</li>

<li>
Crop health monitoring is enabled by soil and plant sensors, as well as multispectral images sourced from satellites or drones. By using this data, AI solutions identify or, if more intricate unsupervised machine learning algorithms are applied, predict diseases in crops. This helps cut crop loss and increase yield. VineView is an example of an app used for monitoring crop health on vineyards (however, it also covers harvesting and irrigation use cases).
</li>

<li>
Intruder identification is focused on securing field territory. AI solutions can monitor drone imagery or surveillance camera footage to detect wild animals and birds or unauthorized humans who can damage crops. For example, Twenty20 Solutions, a leader in the smart surveillance domain, enables farms to reduce crime and theft.
</li>

<li>
Weather prediction can help farmers watch out for extreme weather conditions to save crops from damage before heavy rains or winds start. The OneSoil app for AI-powered precision agriculture allows doing just that.
</li>
</ul>

<h2>Artificial intelligence and harvesting</h2>

<p>
By comparing current field footage to how this crop looked at this point in the growing cycle during the previous season, an artificial intelligence solution can accurately predict when the crop will be ready for harvest. And as soon as harvesting time comes, robots can start removing crops from the field. Harvest CROO, for instance, offers a robotic harvesting solution to pick strawberries that minimizes waste, enhances food safety, and reduces CO2 emissions by 96% compared to traditional harvesting methods. If an agribusiness knows where the crops are transported to and sold afterwards, the solution can identify different harvesting points for same-variety crops that are planned for various locations based on how much time different crop batches will have to spend in transit.
</p>


<h2>AI in agriculture: animal farming</h2>

<p>
Animal farming processes vary a lot based on what the end product is (milk, meat, eggs), so the simplified process below is not linear, some steps can occur in a different order or can be skipped altogether:
</p>

<p>
Animal purchase/birth → Housing → Grooming and cleaning → Feeding and grazing → Health monitoring → Breeding → Harvesting
<p>

<h2>Artificial intelligence and animal birth or purchase</h2>

<p>
Analyzing data from previous reproduction cycles, AI farming solutions can predict how many animals are going to be born and calculate related care costs to enable tweaking reproduction plans if needed. If a farm buys animals, artificial intelligence technology can calculate how many animals the company needs. Such calculations can target the highest yield while balancing it with how many animals the farm can sustainably care for under given farming conditions.
</p>


<h2>Artificial intelligence and housing</h2>

<p>
Tapping into historical data on livestock diseases and correlating it with various housing conditions (humidity, temperature, animal density, etc.), artificial intelligence helps farmers establish the best conditions to keep animals in while also decreasing animal treatment costs. Lely is a great example of a company that leverages AI to deliver solutions for smart cow housing.
</p>

<h2>Artificial intelligence and grooming and cleaning</h2>

<p>
Using correlation capabilities and livestock sensors, AI can help select and schedule grooming and cleaning procedures so that farms don’t waste resources on excessive maintenance or badly affect livestock health in case of insufficient grooming and cleaning. Barn hygiene is a major factor in livestock health. That’s why companies like Lely and GEA offer barn cleaning robots and agribusinesses like an Icelandic farm owned by the Hallgrímsson brothers. By using cleaning workflow automation solutions in tandem with milking and feeding robots, the farm saw a 30% increase in milk outputs and slashed their vet costs by four times.
</p>

<h2>Artificial intelligence and feeding and grazing</h2>

<p>
It can be difficult to find the best balance between feeding and grazing, which is where artificial intelligence can help farmers. Besides that, AI can reveal:
</p>

What foods work better for different types of livestock
How much salt cows need to stay healthy based on breed, age, etc.
How to schedule grazing around weather predictions for better livestock health
How to manage pastures for better grazing quality (say, through paddock rotation or soil health monitoring)
ALUS by Cainthus is an example of an AI farming solution that enables smart feed management, improving animal health and increasing milk outputs.

<h2>Artificial intelligence and health monitoring</h2>

<p>
Since disease management is the prime source of costs for animal farmers, this is the area where AI can bring the most value and allow animals to recover two to four times faster while getting less antibiotics in the treatment process. Artificial intelligence not only cuts disease management costs but also improves food safety. Besides all activities mentioned in other animal farming steps that lead to improving livestock health, AI can continuously monitor livestock’s vitals, body weight, metabolism, and other parameters to alert a vet if an animal’s health is worsening. AI solutions can also continuously look for new correlations between care conditions and livestock health to prevent diseases. Solutions like Rex, Ida, and ALUS are used for monitoring cows’ health, ApisProtect tracks bees’ wellbeing, and Piguard keeps an eye out for changes in the health and wellbeing of pigs.
</p>

<h2>Artificial intelligence and grooming and cleaning</h2>
<p>
Using correlation capabilities and livestock sensors, AI can help select and schedule grooming and cleaning procedures so that farms don’t waste resources on excessive maintenance or badly affect livestock health in case of insufficient grooming and cleaning. Barn hygiene is a major factor in livestock health. That’s why companies like Lely and GEA offer barn cleaning robots and agribusinesses like an Icelandic farm owned by the Hallgrímsson brothers. By using cleaning workflow automation solutions in tandem with milking and feeding robots, the farm saw a 30% increase in milk outputs and slashed their vet costs by four times.
</p>

<p> 
credits : https://becominghuman.ai/
</p>
    `
  },
  {
    id: 2,
    category: "AI & TECH",
    title: "How AI powered Drones Automate Solar Panel Inspection",
    image: "https://i.postimg.cc/C5VtY2Q0/pexels-pixabay-159397.jpg",
    author: "PERYTON TECH",
    author_image: "https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
    date: "JUNE 15, 2024",
    content: ""
  },
  {
    id: 3,
    category: "AI & TECH",
    title: "A Guide To Drone Construction Progression Monitoring",
    image: "https://i.postimg.cc/ZK4gM1NF/pexels-quang-nguyen-vinh-2138126.jpg",
    author: "PERYTON TECH",
    author_image: "https://static.vecteezy.com/system/resources/previews/018/765/757/non_2x/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg",
    date: "JUNE 15, 2024",
    content: ""
  },
];

export const ContactData = [
  {
    icon: <IoLocationSharp />,
    title: "Physical Address​​",
    subTitle: "4th floor, MUTBI, Advance Research Center,Manipal",
  },
  {
    icon: <MdEmail />,
    title: "Email Address",
    subTitle: "info@peryton.in",
  },
  {
    icon: <BsTelephoneFill />,
    title: "Phone Numbers",
    subTitle: "+91-75072-84555",
  },
];

export const team = [
  {
    image: "imgs/tr.png",
    name: "Gaurav Samant",
    title: "CEO/FOUNDER",
    linkedIn: <FaLinkedin />,
    instagram: <FaInstagram />,
  },
  {
    image: "imgs/SahilKumar.png",
    name: "Sahil Kumar",
    title: "STRUCTURAL ENGINEER",
    linkedIn: <FaLinkedin />,
    instagram: <FaInstagram />,
  },
  {
    image: "imgs/RovinNegi.png",
    name: "Rovin Negi",
    title: "MECHANICAL HEAD",
    linkedIn: <FaLinkedin />,
    instagram: <FaInstagram />,
  },
  {
    image: "imgs/EliezerLopes.png",
    name: "Eliezer Lopes",
    title: "AI HEAD",
    linkedIn: <FaLinkedin />,
    instagram: <FaInstagram />,
  },
];
