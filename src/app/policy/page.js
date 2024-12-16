import React from "react";
import ButtonLink from "@/components/buttons/ButtonLink";
import Image from "next/image";
import Link from "next/link";

const pageTitle = "Terms & Privacy Policy";
const pageDescription = `MindOff is all about sharing wisdom, creativity, and personal
						experiences with the world. Here, you can explore guidance and
						information on a range of topics, including design, lifestyle, tech,
						programming, gardening, and more. Whether you’re learning something
						new or finding inspiration, MindOff is intended to be a valuable
						resource for your accomplishments.`;

// META DATA + OG
export async function generateMetadata() {
	return {
		title: pageTitle,
		description: pageDescription,
		openGraph: {
			type: "website",
			title: pageTitle,
			description: pageDescription,
			images: [
				{
					url: process.env.LOGO,
					alt: process.env.NAME + " Logo",
				},
			],
			url: "policy",
			siteName: process.env.NAME,
		},
		alternates: {
			canonical: "policy",
		},
		robots: {
			index: false,
			follow: true,
		},
	};
}

export default function PolicyPage() {
	return (
		<main>
			<header>
				<div className="w-10/12 md:w-4/6 py-12 md:py-24 mx-auto">
					<h1 className="font-sans font-black text-4xl md:text-5xl mb-6">
						{pageTitle}
					</h1>
					<p className="font-serif font-light text-xl md:text-2xl leading-normal md:leading-normal mb-4">
						{pageDescription}
					</p>
				</div>
			</header>
			<section className="flex flex-col lg:flex-row min-h-screen ">
				<article className="w-full lg:w-3/4 order-2 mb-12">
					<section className="w-5/6 pt-12 md:pt-0 mx-auto">
						<p className="font-sans font-medium text-lg">
							{`By using the services and products provided by MindOff, the website and its subsidiaries (referred to as “MindOff,” “we,” or “us”),
                  you, the user (referred to as “you” or “your”), agree to be bound by the following terms and privacy practices, which form a legally
                  binding contract between you and MindOff. MindOff is created and owned by Joel Samraj (referred to as “creator”). If you do not
                  agree with any of these terms or policies, please refrain from using MindOff.`}
						</p>
					</section>
					<section id="privacy-policy" className="content ">
						<div className="w-5/6 pt-12 md:pt-16 mx-auto">
							<div className="mb-7" aria-hidden="true">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="48px"
									viewBox="0 -960 960 960"
									width="48px"
									fill="#000000"
								>
									<path d="M229-57q-38.78 0-66.39-27.61T135-151v-416q0-39.19 27.61-67.09Q190.22-662 229-662h50v-74q0-85.19 58.37-144.59Q395.73-940 479.87-940q84.13 0 142.63 59.41Q681-821.19 681-736v74h50q39.19 0 67.09 27.91Q826-606.19 826-567v416q0 38.78-27.91 66.39Q770.19-57 731-57H229Zm0-94h502v-416H229v416Zm251.17-131q31.83 0 54.33-22.03T557-357q0-30-22.67-54.5t-54.5-24.5q-31.83 0-54.33 24.5t-22.5 55q0 30.5 22.67 52.5t54.5 22ZM373-662h214v-73.77q0-46.73-30.65-77.98-30.64-31.25-76-31.25Q435-845 404-813.75q-31 31.25-31 77.98V-662ZM229-151v-416 416Z" />
								</svg>
							</div>
							<div>
								<h2>1. Privacy Policy</h2>

								<p>
									MindOff does not actively collect any personal data. However,
									if you choose to get in touch with us—whether by email, social
									media, or other means—we may receive your name, email address,
									or any other information you provide voluntarily. This data is
									only used for communication purposes, like responding to your
									questions or messages, and may be removed from our system
									permanently once its purpose is fulfilled. You have complete
									control over your personal information. If, at any time, you
									want us to update or delete your information, simply send us
									an email, and we will ensure it is updated or removed from our
									system within 30 days.
								</p>

								<p>
									<strong>For Example</strong>: If you send us an email to ask
									about a blog post, we’ll use your email address only to reply
									to your message. Once the conversation is over, we may delete
									your information, or you can request its deletion at any time.
								</p>

								<aside>
									<p>
										<strong>📜 In short:</strong> We don’t gather personal data
										unless you reach out to us via email or social handles, and
										you can ask us to delete or update your information if you
										wish.
									</p>
								</aside>
							</div>
						</div>
					</section>
					<section id="cookie-policy" className="content">
						<div className="w-5/6 pt-12 md:pt-16 mx-auto">
							<div className="mb-7" aria-hidden="true">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="48px"
									viewBox="0 -960 960 960"
									width="48px"
									fill="#000000"
								>
									<path d="M479.94-63q-86.12 0-162.03-33T185.5-185.5Q129-242 96-318.19T63-480q0-93 35-170t93.5-132q58.5-55 134-85.5T481.56-898q22.99 0 45.72 2.5Q550-893 572-888q-7 43 2 81.5t33.5 67q24.5 28.5 64 43.5t92.5 10q-1 66 25.5 111T895-528q1 12 1.5 24t.5 22.86q0 85.77-31.5 161.6T778-186.62q-56 57.09-132.33 90.36Q569.34-63 479.94-63Zm-59.82-495Q446-558 464-576.12q18-18.12 18-44T463.88-664q-18.12-18-44-18T376-663.88q-18 18.12-18 44T376.12-576q18.12 18 44 18Zm-80 200Q366-358 384-376.12q18-18.12 18-44T383.88-464q-18.12-18-44-18T296-463.88q-18 18.12-18 44T296.12-376q18.12 18 44 18ZM600-320q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320ZM480.3-157q132.86 0 219.78-85.5Q787-328 802-454q-50-20-82.5-58.5T679-599q-77-12-134-69t-68-134q-61 1-118.5 24t-102 64.5q-44.5 41.5-72 100.35Q157-554.3 157-480q0 135.44 93.78 229.22T480.3-157Zm-.3-325Z" />
								</svg>
							</div>
							<div>
								<h2>2. Cookies Policy</h2>

								<p>
									Cookies are small text files stored on your device by websites
									to remember certain information like your preferences or login
									details. If you prefer not to allow any cookies, you can
									always clear and disable cookies in your browser settings or
									use the opt-out service provided by Google for Google
									Analytics. You won’t miss out on any content by doing so.
								</p>

								<h3>Cookies by MindOff</h3>

								<p>
									At MindOff, we may use cookies to improve your experience by
									caching the webpage content so it loads faster when you return
									to our site.
								</p>

								<p>
									<strong>For Example</strong>: If you read a blog post today,
									cookies might help our site load that page quicker if you
									visit again tomorrow.
								</p>

								<h3>Third-Party Cookies</h3>

								<p>
									<strong>Google Analytics</strong> – A web analytics service
									provided by Google that tracks and reports website and mobile
									app traffic by running a small script on our pages. We use
									reports provided by Google Analytics for the following
									purposes:
								</p>

								<ul>
									<li>
										To learn which posts are popular among readers and display
										them as popular posts on our website.
									</li>
									<li>
										To understand which posts are not popular and improve them.
									</li>
									<li>
										To understand the demographics of our readers to write more
										posts tailored to their regions.
									</li>
								</ul>

								<p>
									Google Analytics cookies may track things like how long you
									spend on a page or which country you’re visiting from, but it
									does not identify individual users or associate your IP
									address with any other data held by Google. By using this
									website, you consent to the processing of data about you by
									Google in the manner described in Google’s Privacy Policy and
									for the purposes set out above.
								</p>

								<aside>
									<p>
										<strong>📜 In short:</strong> We use cookies to make the
										site faster for you and to learn how many people visit our
										blog. You can disable cookies in your browser to opt out.
									</p>
								</aside>
							</div>
						</div>
					</section>
					<section id="copyright" className="content">
						<div className="w-5/6 pt-12 md:pt-16 mx-auto">
							<div className="mb-7" aria-hidden="true">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="48px"
									viewBox="0 -960 960 960"
									width="48px"
									fill="#000000"
								>
									<path d="M387-309h181q20.38 0 31.19-12.38Q610-333.75 610-352v-81h-83v42h-95v-178h95v43h83v-81.7q0-19.3-10.81-31.3T568-651H387q-19.37 0-28.69 12.81Q349-625.38 349-606v253q0 19.37 9.31 31.69Q367.63-309 387-309Zm93.14 254Q392-55 314.51-88.08q-77.48-33.09-135.41-91.02-57.93-57.93-91.02-135.27Q55-391.72 55-479.86 55-569 88.08-646.49q33.09-77.48 90.86-134.97 57.77-57.48 135.19-91.01Q391.56-906 479.78-906q89.22 0 166.83 33.45 77.6 33.46 135.01 90.81t90.89 134.87Q906-569.34 906-480q0 88.28-33.53 165.75t-91.01 135.28q-57.49 57.8-134.83 90.89Q569.28-55 480.14-55Zm-.14-94q138 0 234.5-96.37T811-480q0-138-96.5-234.5t-235-96.5q-137.5 0-234 96.5t-96.5 235q0 137.5 96.37 234T480-149Zm0-331Z" />
								</svg>
							</div>
							<div>
								<h2>3. Copyright and Content Usage</h2>

								<p>
									The content of MindOff is open-sourced under various licenses
									and terms. However, we retain ownership and copyright of these
									original works. You are free to use the content in your own
									projects, limited to the terms in the associated licenses
									explained below:
								</p>

								<ul>
									<li>
										<strong>Text, Images, Videos and Code Snippets</strong>{" "}
										created by MindOff are made available under the{" "}
										<strong>
											Creative Commons Attribution 4.0 International License
										</strong>
										. You can view the license here:{" "}
										<Link
											target="_blank"
											href="https://creativecommons.org/licenses/by/4.0/"
										>
											https://creativecommons.org/licenses/by/4.0/
										</Link>
										.
									</li>
									<li>
										<strong>Source code</strong> for software made by MindOff is
										distributed under various open-source licenses, which will
										be bundled with the Software Source as a LICENSE file.
									</li>
									<li>
										If any of the aforementioned content is shared or hosted on
										third-party platforms like Pinterest, Dribbble, GitHub, or
										NPM, the licenses and terms of those platforms will also
										apply and may supersede the above licenses.
									</li>
									<li>
										Any third-party materials found on MindOff, such as icons
										from Google Material Icons, remain the property of their
										respective owners and are to be used under their own
										licenses and terms.
									</li>
								</ul>

								<p>
									If these terms are violated—such as using our content for
									scams or unethical purposes—we reserve the right to revoke
									your permission to use our work.
								</p>

								<p>
									If we have unintentionally used your work without permission
									or any of our content accidentally resembles your copyrighted
									material, please contact us. We will review the situation and,
									if necessary, alter or remove the content immediately. We
									never intend to infringe on anyone’s intellectual property.
								</p>

								<aside>
									<p>
										<strong>📜 In short:</strong> You can use our content in
										your projects, even if you sell them. However, you cannot
										sell our unaltered content as standalone products.
										Third-party materials remain the property of their owners
										and follow their own licenses and terms.
									</p>
								</aside>
							</div>
						</div>
					</section>
					<section id="user-responsibility" className="content">
						<div className="w-5/6 pt-12 md:pt-16 mx-auto">
							<div className="mb-7" aria-hidden="true">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="48px"
									viewBox="0 -960 960 960"
									width="48px"
									fill="#000000"
								>
									<path d="m18-107 462-799 462 799H18Zm145-84h634L480-739 163-191Zm321.18-48q13.4 0 23.61-10.39Q518-259.78 518-273.18q0-13.4-10.39-23.11-10.39-9.71-23.79-9.71-13.4 0-23.61 9.89Q450-286.22 450-272.82q0 13.4 10.39 23.61Q470.78-239 484.18-239ZM454-348h60v-216h-60v216Zm26-117Z" />
								</svg>
							</div>
							<div>
								<h2>4. User Responsibilities</h2>

								<h3>Security</h3>

								<p>
									We expect all users to engage with the MindOff blog
									responsibly and respectfully. This includes refraining from
									harmful or illegal activities, such as spreading false
									information, attempting to hack the site, or using content for
									scams. Any attempt to impersonate MindOff, deceive others into
									providing personal information, or distribute altered versions
									of our content for malicious purposes is a violation of these
									terms.
								</p>

								<p>
									While we take every precaution to secure our site, we are
									continuously working to improve. If you identify any
									vulnerabilities or security issues, we would appreciate your
									prompt notification via email so we can address them quickly.
								</p>

								<h3>Links to Other Websites</h3>

								<p>
									You may encounter links to external websites on MindOff,
									including product recommendations, additional resources, or
									references. While we strive to link to reputable sites, we are
									not responsible for their privacy practices or the content
									they provide. Please review the terms and privacy policies of
									any site you visit.
								</p>

								<p>
									Some of these links may be affiliate links, meaning we may
									earn a small commission if you make a purchase through them.
									This comes at no extra cost to you. Although we aim to link
									only to trusted sellers, it is your responsibility to verify
									the authenticity of products before making a purchase. Any
									issues with the products or orders should be addressed
									directly with the manufacturer or seller.
								</p>

								<aside>
									<p>
										<strong>📜 In short:</strong>{" "}
										{`Engage responsibly with MindOff—don’t spread false information or use our products for illegal
                    activities. Report any security issues you find. External links are for reference, but we aren't liable for their content. Some
                    links may earn us a commission, but always verify products before buying.`}
									</p>
								</aside>
							</div>
						</div>
					</section>
					<section id="disclaimer" className="content">
						<div className="w-5/6 pt-12 md:pt-16 mx-auto">
							<div className="mb-7" aria-hidden="true">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="48px"
									viewBox="0 -960 960 960"
									width="48px"
									fill="#000000"
								>
									<path d="M741-439v-82h185v82H741Zm74 302L666-248l50-66 148 110-49 67Zm-96-510-50-66 146-110 49 66-145 110ZM164-175v-160h-47q-35.75-4-59.37-31.19Q34-393.38 34-429v-102q0-39.19 27.91-67.09Q89.81-626 129-626h163l233-139v570L292-335h-29v160h-99Zm266-186v-238l-115 68H129v102h186l115 68Zm135 40v-319q38 27 60.5 69t22.5 91q0 49-22.3 90.9-22.3 41.91-60.7 68.1ZM280-480Z" />
								</svg>
							</div>
							<div>
								<h2>5. Disclaimer</h2>

								<h3>No Warranty or Guarantee</h3>

								<p>
									The MindOff website and its content are provided on an{" "}
									<strong>{`"as-is"`}</strong> basis without any guarantees or
									warranties of any kind. If you encounter any factual
									inaccuracies or experience functionality issues on the site,
									please report them to us via email, and we will make
									reasonable efforts to resolve them.
								</p>

								<h3>Content Accuracy & Liability</h3>

								<p>
									At MindOff, we strive to provide accurate, safe, and
									up-to-date information. However, as our blog posts are created
									by humans, errors may occur, and some content may become
									outdated over time. The content on MindOff reflects personal
									experiences, opinions, and research, and should not be
									considered professional advice or legal guidance. What works
									for one individual may not work for another.
								</p>

								<p>
									We encourage readers to verify information with multiple
									trusted sources and consult appropriate experts before
									following any guidance that requires professional expertise.
									If you choose to act on any advice or replicate any content
									from MindOff, you do so at your own risk and should take all
									necessary safety precautions. MindOff or the creator is not
									liable for any injury, damage, or loss of any kind that may
									arise, directly or indirectly, from your actions based on our
									content.
								</p>

								<p>
									<strong>For Example:</strong>
								</p>
								<ul>
									<li>
										If you read a blog post regarding mental wellness, please
										consult a qualified professional to determine whether the
										advice is suitable for your lifestyle.
									</li>
									<li>
										If you follow a tutorial for a DIY project, ensure you use
										the appropriate tools and safety gear to complete the
										project safely.
									</li>
								</ul>

								<aside>
									<p>
										<strong>📜 In short:</strong> MindOff provides its content
										without guarantees, and while we aim for accuracy, mistakes
										can happen. Always double-check information with trusted
										sources and consult experts before acting on any advice.
										You’re responsible for your own safety and results.
									</p>
								</aside>
							</div>
						</div>
					</section>
					<section id="policy-updates" className="content">
						<div className="w-5/6 py-12 md:py-16 mx-auto">
							<div className="mb-7" aria-hidden="true">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="48px"
									viewBox="0 -960 960 960"
									width="48px"
									fill="#000000"
								>
									<path d="M483.81-95q-79.48 0-150.64-30.5Q262-156 209.5-208.5t-83.5-123Q95-402 95-482t31-149.5Q157-701 209.5-753t123.73-82.5Q404.46-866 484-866q81 0 153.5 34T766-739v-95h71v227H608v-73h84q-42.27-42.27-95.64-66.63Q543-771 484-771q-122 0-208 82.82t-86 203Q190-362 275.37-275.5 360.75-189 484-189q120 0 203.38-85.35Q770.75-359.7 772-481h94q0 161-111 273.5T483.81-95ZM600-311 446-463v-220h71v189l135 131-52 52Z" />
								</svg>
							</div>
							<div>
								<h2>6. Updates to the Policy</h2>
								<p>
									MindOff reserves the right to update these terms and privacy
									policy without prior notice. It is your responsibility to
									review the terms periodically for any changes. The most recent
									version of our terms and privacy policy can always be found
									here:&nbsp;
									<Link href="/policy">{process.env.URL + "policy"}</Link>.
								</p>
								<p>
									If significant changes are made, we may notify users via a
									blog post or a notice on the homepage.
								</p>
								<div className="flex items-center text-normal">
									<time
										className="font-serif italic font-bold text-nowrap"
										dateTime="2024-10-01"
									>
										<span className="mr-1">Last updated:</span>October 01, 2024
									</time>
								</div>
							</div>
						</div>
					</section>
					<section id="contact" className="bg-brown w-11/12 mx-auto rounded-lg">
						<div className="w-5/6 py-12 md:py-16 mx-auto">
							<div className="mb-7" aria-hidden="true">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="48px"
									viewBox="0 -960 960 960"
									width="48px"
									fill="#000000"
									aria-hidden="true"
								>
									<path d="M479-55q-87.52 0-164.76-33T179-179q-58-58-91-135.45-33-77.44-33-165.5Q55-568 88-645.5q33-77.5 90.84-135.55 57.85-58.06 135.36-91.5Q391.72-906 479.86-906t165.76 33.37q77.62 33.37 135.59 91.29 57.98 57.92 91.39 135.2Q906-568.86 906-481v52.5q0 62.15-45.61 103.82Q814.79-283 751-283q-39.33 0-73.16-18.5Q644-320 627-354q-24 37-63.34 54t-83.35 17q-82.92 0-140.61-56.97Q282-396.93 282-480.48q0-83.55 57.46-141.03Q396.91-679 479.76-679q82.84 0 140.54 57.49Q678-564.02 678-480v45.93q0 28.97 22.07 49.02Q722.13-365 751.48-365q28.91 0 49.71-20.05Q822-405.1 822-434.07V-481q0-141.96-100.02-241.48Q621.96-822 480-822q-141.96 0-241.98 100.02Q138-621.96 138-480q0 141.96 99.52 241.98Q337.04-138 479.4-138H694v83H479Zm1.24-310Q528-365 562-398.93q34-33.92 34-81.25Q596-529 561.76-563q-34.23-34-82-34Q432-597 398-562.82q-34 34.17-34 83 0 47.32 34.24 81.07 34.23 33.75 82 33.75Z" />
								</svg>
							</div>
							<div>
								<p className="font-serif font-normal text-2xl md:text-3xl mt-5 mb-10 leading-normal">
									Hope you enjoy MindOff and find the content helpful and
									inspiring. If you have any questions or concerns, You can
									email at
									<br />
									<span className="font-black">joe (at) mindoff.work</span>
								</p>
							</div>
						</div>
					</section>
				</article>
				<aside className="w-full lg:w-1/4 h-auto lg:h-screen bg-green sticky left-0 top-0  md:pt-24 md:pb-16 border-black border-opacity-5 border-y-2px md:border-b-0 md:border-r-3px md:border-t-3px md:rounded-tr-lg">
					<div className="flex flex-row lg:flex-col overflow-auto scrollable p-4 md:p-8">
						<p className="font-serif italic font-bold mr-5 lg:mr-0 lg:mb-5 text-nowrap">
							Jump To:
						</p>
						<ul className="list-none flex flex-row lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-4">
							<li>
								<ButtonLink
									link={"#privacy-policy"}
									content={"Privacy Policy"}
								/>
							</li>
							<li>
								<ButtonLink
									link={"#cookie-policy"}
									content={"Cookies Policy"}
								/>
							</li>
							<li>
								<ButtonLink link={"#copyright"} content={"Copyright Policy"} />
							</li>
							<li>
								<ButtonLink
									link={"#user-responsibility"}
									content={"User Responsibility"}
								/>
							</li>
							<li>
								<ButtonLink link={"#disclaimer"} content={"Disclaimer"} />
							</li>
							<li>
								<ButtonLink
									link={"#policy-updates"}
									content={"Updates to the Policy"}
								/>
							</li>
							<li>
								<ButtonLink link={"#contact"} content={"Contact"} />
							</li>
						</ul>
					</div>
				</aside>
			</section>
		</main>
	);
}
