<script>
import ProjectSection from "../components/ProjectSection.vue";
import ProjectSectionContentImage from "../components/ProjectSectionContentImage.vue";
import ProjectSectionContentImageCaption from "../components/ProjectSectionContentImageCaption.vue";
import ProjectSectionContentTable from "../components/ProjectSectionContentTable.vue";
import ProjectSectionContentText from "../components/ProjectSectionContentText.vue";
import ProjectSectionContentTextCard from "../components/ProjectSectionContentTextCard.vue";
import ProjectSectionContentTextH3 from "../components/ProjectSectionContentTextH3.vue";
import ProjectSectionContentTextH4 from "../components/ProjectSectionContentTextH4.vue";
import ProjectSectionContentTextH5 from "../components/ProjectSectionContentTextH5.vue";
import ProjectSectionContentTextH6 from "../components/ProjectSectionContentTextH6.vue";
import ProjectSectionContentTextP from "../components/ProjectSectionContentTextP.vue";
import ProjectSectionContentTextQuote from "../components/ProjectSectionContentTextQuote.vue";
import ProjectSectionContentVideo from "../components/ProjectSectionContentVideo.vue";

export default {
    components: {
        ProjectSection,
        ProjectSectionContentImage,
        ProjectSectionContentImageCaption,
        ProjectSectionContentTable,
        ProjectSectionContentText,
        ProjectSectionContentTextCard,
        ProjectSectionContentTextH3,
        ProjectSectionContentTextH4,
        ProjectSectionContentTextH5,
        ProjectSectionContentTextH6,
        ProjectSectionContentTextP,
        ProjectSectionContentTextQuote,
        ProjectSectionContentVideo,
    }
}
</script>

<template>
    <article class="bg--gray-lighter">
        <v-container-fluid>
            <header>
                <v-row no-gutters>
                    <v-col md="8" offset-md="2">
                        <v-img cover src="/assets/img/smartcontact/smartcontact__header.png"></v-img>
                    </v-col>
                </v-row>
                <div class="d-flex align-center justify-center">
                    <div>
                        <h1 class="text-h1 mb-8">SmartContact</h1>
                        <h2 class="text-h2 mb-8">The merge of several products into one</h2>
                    </div>
                </div>
            </header>
            <main>
                <v-row no-gutters>
                    <v-col md="8" offset-md="2">
                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>DV Business Solutions, a division of The Digital Virgo group, offered Software as a Service (SAAS) products to other companies to manage the communication with their customers.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Over the years they had accumulated a catalog of disparate products that made the experience slow and cumbersome to use. To catch up competitors the goals were to increase sales and use while minimizing resources.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>My role</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The initial team was just me closely working with a Product Manager (PM) in an ambitious long-term project to unify 7 siloed but interrelated products into a single solution.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>My role in the project evolved from leading desing with a dual role as a UX designer and frontend engineer to a pure UX designer. Given the pace of a single person for such a huge workload, it became necessary to delegate tasks and responsibilities. This led to the growth of the team, with new members coming on board to help with the project. This allowed me to focus more on UX design, therefore being able to contribute to the project in a more specialized way to further develop my UX design skills.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentTable>
                                <thead>
                                    <tr>
                                        <th v-for="year in [2016, 2017, 2018, 2019]" :key="year" colspan="2" class="center-cell">
                                            {{ year }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td v-for="semester in ['S1', 'S2', 'S1', 'S2', 'S1', 'S2', 'S1', 'S2']" :key="semester" class="center-cell">
                                            {{ semester }}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="7">Product Manager & I</td>
                                        <td colspan="1">End</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3"></td>
                                        <td colspan="5">New project manager</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3"></td>
                                        <td colspan="5">New frontend developer</td>
                                    </tr>
                                    <tr>
                                        <td colspan="4"></td>
                                        <td colspan="4">New visual designer</td>
                                    </tr>
                                </tbody>
                            </ProjectSectionContentTable>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>I also led the frontend development of the unification from April 2016 to September 2017 when I delegated most of the frontend to a new developer along the second half. Similarly, a new visual designer took the detailed visual design along 2018.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I stopped working on the project on May 2019 to make my <a href="../resume.html">Human-Computer Interaction & Design masters</a>. It was about to begin the development of the <strong>Smart</strong>Contact <em>Supervisor</em> as we already entered the detailed visual design phase.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>Scope and constraints</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>Most of the 7 independent products to merge were originally created by different departments, teams or acquiring other companies. This meant different technology stack, often with a legacy nature, limiting sometimes the feasibility of ideas.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>The company could not afford leaving the current products as they were until the new product would be released given the magnitude of time needed for this project. Therefore, some changes were introduced incrementally to satisfy business requirements and increase user experience while easeing the learning curve facing to the future merged product.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Due to the company policy I could not have access to external users (except from some exceptional surveys). Hence, I mostly collaborated with our internal users (contact center agents and support staff) along commercial staff who transmited the customers' feedback.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>
                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The discovery</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextH4>Landing in the customer relationship ecosystem</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The first weeks as a newcomer to the customer relationship ecosystem were dense. Analysing all the different products the company had and remembering new concepts and the jargon took some time.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>That's why, to help you follow the idea, you will see these cards explaining an industry concept when relevant.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>Personas</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>There was a considerable variety of users. From the dentist who only needed to send reminder messages (SMS) to their patients, to companies that resold our contact center products to other companies under a white label model and everyone in between.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__personas.png"></v-img>
                                <ProjectSectionContentImageCaption>Our four different archetypes of personas. 3 primary personas using our product professionally and one secondary.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH4>First mission: QoS</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>My first mission was to create a tool to manage the Quality of Service (QoS) our customers provide to their customers.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextCard>Quality of service (QoS) is the description and measurement of the overall performance seen by the users of the a service.</ProjectSectionContentTextCard>
                                <ProjectSectionContentTextP>Users could define questions to get feedback on the quality of service provided. These questions were asked by the end of the phone call, after having provided a service, and their customers would have the option to answer them. Users could also see this feedback and all the responses associated to each question.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I began performing a non-exaustive competitive analysis, mostly based on web tools, due to limited access to telephony based ones.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>The design scaled up quickly to support more business needs.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>
                                    <ul>
                                        <li>Templates of predefined questions common in the industry (First Call Resolution, Net Promoter Score, etc.) to speed up set up.</li>
                                        <li>Different types of questions (Yes/No, 1 to 10 score, etc.)</li>
                                        <li>Information from calls metadata such a number of calls, surveys started and surveys completed; Survey average time;</li>
                                        <li>Define business hours, holidays, telephone numbers and phone tree paths to determine whether or no carry out the survey.</li>
                                        <ProjectSectionContentTextCard>Phone tree, or a <a href="https://www.zendesk.fr/blog/what-is-ivr/#georedirect">Interactive Voice Response</a> (IVR), is an automated phone system tool that answers incoming customer calls and offers options for next steps via a menu. It uses these responses to route customers to the right agent or department, etc.</ProjectSectionContentTextCard>
                                        <li>and more</li>
                                    </ul>
                                </ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__designIterations.png"></v-img>
                                <ProjectSectionContentImageCaption>Design iterations exploring the home, edit and results screens. The latter adding more features and shifting the posture from individual results, to a dashboard.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                        </ProjectSection>
                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The challenge</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>Using multiple products made the users work more complex, slow and cumbersome. Different accounts and logins, different interfaces and behaviour, in addition to complex texts and design, repeated and redundant reentrancy of data and an unappealing aestethics.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Users want to focus and work in their businesses not to spend time and effort learning and using a bunch of disparates and complex tools.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>Users and Customer feedback</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextQuote>"[I need] Improvements in the visualization of the display, monitoring..."</ProjectSectionContentTextQuote>
                                <ProjectSectionContentTextQuote>"I believe that the administration should be improved in terms of usability and errors."</ProjectSectionContentTextQuote>
                                <ProjectSectionContentTextQuote>"The portal is quite old and I have no time to manage the services. It deserves an update."</ProjectSectionContentTextQuote>
                            </ProjectSectionContentText>
                            <ProjectSectionContentTextQuote>"[I need] Easier virtual switchboard programming."</ProjectSectionContentTextQuote>
                            <ProjectSectionContentTextQuote>"The poor virtual switchboard, it looks old."</ProjectSectionContentTextQuote>
                            <ProjectSectionContentTextQuote>"From software maker to software maker, this... is pretty dated."</ProjectSectionContentTextQuote>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH4>Introducing the problem of redundancy and the solution of SSO and The Merge</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>To achieve our goal of increase sales and usage while minimizing resources we had to create streamlined tools and efficient workflows that minimize setup and maintenance time so they don't distract them from their business operations.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>For example, in the previous case, they needed to introduce the telephone numbers, the business hours and holidays. When users didn't remember this information, which was usually the case, they had to use another existing tool where they had already defined the same information. They had to log in this other tool, look for the information they need and come back to the QoS tool finally to add it.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Wouldn't be easier provide this information directly in the new QoS tool and the only task they would need to do is select the right value? Luckily, my Product Maganer was aligned with this vision and we fought for it.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4>Breaking down and analyzing to find the pieces of the puzzle</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>To identify and address repetitive redundancy, I conducted a comprehensive analysis of our products and broke them down into their constituent parts. This approach involved clustering products based on their high-level functionality and features as well as examining their individual units of operation, including fields and inputs.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="8" offset="2">
                                        <v-img cover src="../assets/img/smartcontact/smartcontact__cardSorting.png"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption>Post workshop analysis.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Through this process, I was able to uncover areas of overlap and commonality between many of our products, which provided valuable insights for improving our overall information architecture.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__architecture.jpg"></v-img>
                                <ProjectSectionContentImageCaption>Aggrupation of previously existing products. Dotted lines represent the entry point to the product; vertical lines represent different products and horizontal lines represent its functionality.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                        </ProjectSection>
                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The vision</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextH4>All in one solution</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>This supposed the new vision of a unified product: <strong>Smart</strong>Contact. However, it made sense that 2 clearly differenciated roles had different tools. Therefore <strong>Smart</strong>Contact is composed by two major tools. <strong>Smart</strong>Contact <em>Supervisor</em> and <strong>Smart</strong>Contact <em>Agent</em>.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>
                                    <ul>
                                        <li><strong>Smart</strong>Contact <em>Supervisor</em> would be the main tool where our customer could set up, manage and configurate their communications.</li>
                                        <li><strong>Smart</strong>Contact <em>Agent</em> would be the product that enable our customers to directly communicate with their own clients, either inbound and outbound. It had to provide tools for the agent to perform their work optimally.</li>
                                    </ul>
                                </ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Therefore, I was designing for both Business to Business (B2B) and Business to Customer (B2C) situations.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>At this point, we had a clear and ambitious goal in mind, merge all the 7 different isolated products into a single one. However, as I mentioned earlier, we couldn't wait for this merge to happen to offer the new product to our customers. The business requirement forced us to keep providing new tools, such as QoS and Agent, still independtly while improving existing ones because of a faster <em>Time to market</em>.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>
                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>The approach</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextP>For the <strong>Smart</strong>Contact <em>Agent</em> we adopted a Minimum Viable Product (MVP) version with an iterative approach to cope with the high pressure to satisfy customers' demands, and therefore, business needs. We released a new product with basic funtionality that would quickly iterate on working versions incorporting new features.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__whiteboards.png"></v-img>
                                <ProjectSectionContentImageCaption></ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>At the start we did not focus directly on the <strong>Smart</strong>Contact <em>Supervisor</em>. Instead we tackle two parallel but shifted fronts, where one started before the other and provided feedback to it. We began by separetely introducing updates to the existing products to improve their current usability, test new concepts, functionality, validate our approach to it and gauge feedback. This allowed us to explore in order to find the optimal way to later structure and integrate it into the <strong>Smart</strong>Contact <em>Supervisor</em> as a cohesive whole.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Through these efforts, we were able to develop a more refined and effective approach to the <strong>Smart</strong>Contact which allowed us test our ideas, and how they where designed, at the same time that enable us looking forward to satisfy user needs with the final unified product.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH4><strong>Smart</strong>Contact <em>Agent</em></ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>We had a product designed for contact center agents to work on landline telephones, but we aimed to make it more accessible by moving it to the cloud. Our goal was to create a browser-based solution that required no additional software to streamline the user experience. In addition, both versions had to coexist.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>The existing tool, traditional agent, consisted of just a landline telephone for the contact center agents to communicate with customers. They could perform some interactions with their dialpads when in conversation such pressing 0 to put on hold, pressing 1 to transfer the call, etc. and when idle to change their status, for example, from "Working" to "Pause" for lunch or going to the restroom.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>I began performing an exaustive competitive analysis on other similar products to identify the different features others have and the structures and means in which they provide their functionalify.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__marketCompetitors--agent.png"></v-img>
                                <ProjectSectionContentImageCaption>Different competitors software extracted from the competitive analysis.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Given the MPV approach, the basic needs for the new <strong>Smart</strong>Contact <em>Agent</em> were:</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>
                                    <ul>
                                        <li>a softphone enabling picking up inbound calls and dialing outbound calls</li>
                                        <ProjectSectionContentTextCard>A softphone is a software program for making telephone calls over the Internet using a general purpose computer rather than dedicated hardware. It is usually used with a headset connected to the sound card of the PC or with a USB phone.</ProjectSectionContentTextCard>
                                        <li>integrate the Automatic Call Distribution (ACD) logic and the different status a agent could be</li>
                                        <ProjectSectionContentTextCard>An automatic call distributor (ACD), is a telephony device that answers and distributes, based on parameters, incoming calls to a specific group of terminals or agents within an organization.</ProjectSectionContentTextCard>
                                        <li>and finally show a frame displaying some kind of web content associated with each call.</li>
                                    </ul>
                                </ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Expanding our existing traditional contact center agent tool to a new web-based one brought a lot of opportunities but also challenges. For example the status changes were done on a "ACD node" basis which led to a inconsistent model where an agent could be on <em>Working</em> in "Support", on <em>Lunch pause</em> in "Telemarketing" and on <em>Restroom pause</em> for "Sales". We had to update that model from scratch taking into consideration the new multichannel nature, with telephony and chat support, priority levels, and new status types and times that we could now measure.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Another examples were the management of the frame which showed supporting information to the contact center agents set by their manager. In the case the call was an outbound call powered by our telemarketing tool, this space showed a script form the agent should follow to persuade the recipients and gather information about them. We received feedback from the customer via the sales team stating that the telemarketing tool left too little space for the actual relevant content for the agents to follow and interact with.Forcing us to tackled this issue with a redesing of other tools, which in turn, made us discover new challenges to adapt everything and ideate new concepts to improve the services our tools provided to our customers such a new classifiaction system or a LITE version of our <strong>Smart</strong>Contact <em>Agent</em> for thos customers who already had a Customer Service Management (CSM) tool.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__testAgentLite--a.png"></v-img>
                                <ProjectSectionContentImageCaption><strong>Smart</strong>Contact <em>Agent</em> paper prototype test.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH4><strong>Smart</strong>Contact <em>Supervisor</em></ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>Most of the features that were gradually being incorporated to <strong>Smart</strong>Contact <em>Agent</em> required the modification or creation of additional space somewhere in the existing management product in order to manage them.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>This also led us to tackle the quality of our services of monitoring and statistics because this information is crucial for contact center managers to keep a high performance. On the one hand, the monitor allows to detect what is happening in a given moment and to react accordingly. For example, a peak on calls due to a technical problem or seeing one agent taking too long within a call. On the other hand, the statistics provide more medium to long term information to evaluate the performance at a higher level of the business.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH5>Tradeoffs to meet stakeholder needs</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>Balancing the needs of multiple stakeholders is a complex process that requires careful consideration and collaboration. We worked with a wide range of stakeholders —from development teams to financial and commercial departments— each with their own interests. Meeting everyone's requirements was not easy, and we all had to make some tradeoffs.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <row>
                                    <v-col cols="8" offset="2">
                                        <v-img cover src="../assets/img/smartcontact/smartcontact__stakeholdersNeeds.png"></v-img>
                                    </v-col>
                                </row>
                                <ProjectSectionContentImageCaption></ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>Through a series of analyses and discussions, we were able to identify the 80% most used and relevant features and functionalities we would continue with. This led to a reduction in complexity and scope, which allowed us to create a more coherent and natural design. The end result was a better designed product that met the majority of stakeholder needs.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextH5>Designing for flexibility @macro level</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>The diverse needs and interests of our personas made us to iterate a lot until we reach the conclusion that a module-based platform with big ability for customization was the best solution. Some clients only needed SMS sending or a few agents to manually call their customers, while others had to manage thousands of agents carrying out marketing campaigns or providing customer support services.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>We knew that the platform needed to be flexible enough to handle these varying degrees of complexity, while still providing a simple and intuitive experience for all users. A segmentation in modules allowed users to contract modules according to their needs while easing accounting and billing to the financial department and ultimately resulting in a platform that could scale to meet the demands of even the most different business operations and activities.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__architecture--2.png"></v-img>
                                <ProjectSectionContentImageCaption>The new product architecture where we extracted commonality between our old products to ground levels and their features became modules, represented by the gray boxes, in the merged final product.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH5>Designing for flexibility @micro level</ProjectSectionContentTextH5>
                                <ProjectSectionContentTextP>We opted for a flexible and customizable dashboard after many attempts to find one that would suit everyone. We knew that our users had varying needs and preferences based on the nature of their taks, and we wanted to create a dashboard that could adapt to those needs.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Our initial attempts at finding a suitable dashboard were unsuccessful. We were close, but either we would not offer required information to some or we would made it too complicated and difficult to use.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__componentLibrary.png"></v-img>
                                <ProjectSectionContentImageCaption>Exploration of different charts and visual element to best convey relevant information and to be use on the dashboard widgets.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextP>We decided that the best solution would give our users the option to build their own dashboard from scratch, one that allowed flexibility to customize it to their liking. It was a challenging process, but we were ultimately able to create a dashboard that was both intuitive and adaptable.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>By taking the time to develop a flexible and customizable dashboard, we were able to provide a solution that met the diverse needs of our users and helped them to be more efficient and productive in their work.</ProjectSectionContentTextP>
                                <ProjectSectionContentTextP>Our initial attempts at finding a suitable dashboard were unsuccessful. We were close, but either we would not offer required information to some or we would made it too complicated and difficult to use.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                            <ProjectSectionContentImage>
                                <v-img cover src="../assets/img/smartcontact/smartcontact__supervisorMonitor--widgets.png"></v-img>
                                <ProjectSectionContentImageCaption>Subset of information widgets avaiable for users to customize their dashboard.</ProjectSectionContentImageCaption>
                            </ProjectSectionContentImage>
                        </ProjectSection>
                        <ProjectSection>
                            <ProjectSectionContentText>
                                <ProjectSectionContentTextH3>Reflections</ProjectSectionContentTextH3>
                                <ProjectSectionContentTextH4>Future work</ProjectSectionContentTextH4>
                                <ProjectSectionContentTextP>The nature of a Mininum Viable Product that evolve following an iterative approach we chose for <strong>Smart</strong>Contact <em>Agent</em> could eventually led to a design by accretion that should eventually be reviewed.</ProjectSectionContentTextP>
                            </ProjectSectionContentText>
                        </ProjectSection>
                    </v-col>
                </v-row>
            </main>
        </v-container-fluid>
    </article>
</template>

<style>
/* Estilos para las secciones pares */
section:nth-child(even) {
    background-color: var(--color-gray-lightest);
}

/* Estilos para las secciones impares */
section:nth-child(odd) {
    background-color: var(--color-white);
}

a {
    color: var(--color-red);
}

a:hover {
    text-decoration: none;
}

ol, ul {
    padding-left: 20px;
}
</style>