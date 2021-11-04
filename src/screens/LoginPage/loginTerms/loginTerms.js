import React, {useState} from 'react';
import { View, Text, TextInput, Pressable} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-paper';
import styles from './styles';

const LoginTerms = props => {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu. Id consectetur purus ut faucibus. Ridiculus mus mauris vitae ultricies. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. In ante metus dictum at tempor commodo. Duis at consectetur lorem donec massa. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Quam elementum pulvinar etiam non quam. Etiam sit amet nisl purus. Faucibus ornare suspendisse sed nisi lacus. Blandit massa enim nec dui nunc mattis enim ut tellus. Porta lorem mollis aliquam ut. At urna condimentum mattis pellentesque.';
    const [isSelected, setSelection] = useState(false);

    return ( 
        
         
        <View style={styles.container}>
           
           <Text style={{fontSize: 22, paddingLeft: 10, textAlign: 'center'}}>Terms & Conditions</Text>
                        
                    <View style={{paddingTop: 15}}>
                            
                    <ScrollView >
            <Text> TERMS AND CONDITIONS FOR DRIVERS </Text>
            <Text style={styles.tncText}>These terms and conditions (“terms and conditions”) set out the basis on which you are allowed to use and/or access our website and/or the app and/or provide the services through the app to users, and constitute the terms of our agreement with you, if you continue to use this website and/or the app and/or provide the services to the users. </Text>
            
            
            <Text style={{textAlign:'center', color:'red', fontWeight:'bold'}}>IMPORTANT NOTICE –</Text>

            <Text style={[styles.tncText, {color:'red', fontWeight:'bold'}]}>PLEASE READ OUR TERMS AND CONDITIONS OF USE OF OUR WEBSITE AND/OR THE APP, THE SUBSRIBTION TO AND USE OF THE SERVICES</Text>
            
            <Text style={styles.sectionHeader}>1. INTRODUCTION</Text>
            <Text style={styles.tncListItems}>1.1 We are ClicknDeliver an online technology platform which connects users with drivers for fast, 	reliable and efficient delivery of packages and/or goods in South Africa. </Text>
            <Text style={styles.tncListItems}>1.2	We are developed, operated and owned by BRIMA TECHNOLOGIES (PTY) LTD, based in South 	Africa and trading as BRIMA TECH (“we/us/our”). We are a private company incorporated in 	accordance with the laws of the Republic of South Africa with registration number 2015/255646/07 	and situated at 5 Marlin Road, Jet Park, 1459.</Text>
            <Text style={styles.tncListItems}>1.3	Your use of www.clickndeliver.co or via any Smartphone Applications (“the app”) will be subject 	to the then current version of these terms and conditions published on the app and/or on the 	website at www.clickndeliver.co at the time of your use.  </Text>
            <Text style={styles.tncListItems}>1.4	Every person that accesses or uses the app, including each user who registers an account 	with us (“users”) and drivers who apply and are accepted by us (“you/your/drivers”) are 	bound by these terms and conditions. By applying through the app as a driver and/or by 	clicking on the “Apply Now” button on the app, you acknowledge that you have read and 	understood these terms and conditions and that you agree to be bound thereto. </Text>
            
            
            <Text style={styles.tncListItems}>1.5	We may change these terms and conditions from time to time and such changes will take effect 	as and when published on our website and/or the app. Therefore, you must always read the terms 	and conditions prior to using the app and/or the accessing and/or providing of the services as the 	then current version of the terms and conditions will apply.  </Text>
            <Text style={styles.tncListItems}>1.6	Your use of any information on the app and/or access and/or providing of the 	services is entirely at your own risk, for which we shall not be liable under any 	circumstances </Text>
            <Text style={styles.tncListItems}>1.7	Unauthorized use of the app and/or the providing of the services may give rise to a claim 	for damages and/or be a criminal offence. </Text>
            <Text style={styles.tncListItems}>1.8	The app and the services create a technology platform that allows users to arrange and 	schedule courier services with drivers, as independent third party contractors under 	agreement with us or certain of our affiliates. You acknowledge that we do not provide 	courier services or function as public or common carrier in relation to the carriage of goods 	and that all such services are provided by drivers who are independent third party 	contractors and who are not employed by us. </Text>
        
            <Text style={styles.sectionHeader}>2. INTERPRETATION AND DEFINITIONS</Text>
<Text style={styles.tncListItems}>The following terms shall have meaning assigned to them:</Text>

            <Text style={styles.tncListItems}>2.1 “applicable law” means all laws, statutes, ordinances, by-laws or other legislative measures relevant and applicable to the implementation of these terms and conditions;</Text>
            <Text style={styles.tncListItems}>2.2 “business day” means any day other than a Saturday, Sunday or public holiday in South Africa;</Text>
            <Text style={styles.tncListItems}>2.3 “business hours” means the hours between 08h00 and 17h00 on a business day;</Text>
            <Text style={styles.tncListItems}>2.4 “collection address” means the physical address at which a package must be collected, as set out in your order;</Text>
            <Text style={styles.tncListItems}>2.5 “driver/s” means a third party driver/s offering a courier service to you, being the services, through the app;</Text>
            <Text style={styles.tncListItems}>2.6 “delivery address” means the physical address at which the package must be delivered, as set out in your order;</Text>
            <Text style={styles.tncListItems}>2.7 “order” means a request submitted by you on the app for the services;</Text>
            <Text style={styles.tncListItems}>2.8 “package” means the goods and/or items you need require to be collected and delivered by the driver/s through the app;</Text>
            <Text style={styles.tncListItems}>2.9 “personal information” means any information that falls within the definition of ‘personal information’ as defined in the Protection of Personal Information Act, 4 of 2013 (“POPIA”) and shall include but not be limited to, information in respect of an individual, such individual’s name, email addresses, telephone/mobile number/s, physical addresses, VAT number and Company registration number (if applicable) and credit or debit card details;</Text>
            <Text style={styles.tncListItems}>2.10 “services” means the collection and delivery service made available by a driver, which is requested through the use of the app and as set out in your order; and</Text>
            <Text style={styles.tncListItems}>2.11	“user’s personal information” means any information that falls within the definition of ‘personal 	information’ as defined in the Protection of Personal Information Act, 4 of 2013 (“POPIA”)  and 	shall include but not be limited to, information in respect of an individual, such individual’s name, 	email addresses, telephone/mobile number/s, physical addresses and credit or debit card details; 	and </Text>
            <Text style={styles.tncListItems}>2.12	“user” means any person or customer who accesses, downloads, register, or utilises the app to 	place an order for the delivery of a package by means of the services. </Text>

            <Text>3. REGISTRATION AND USE OF THE APP</Text>
            <Text style={styles.tncListItems}>3.1 Only registered users may access and/or use the services through the app.</Text>
            <Text style={styles.tncListItems}>3.2	By submitting your application to us, you represent and warrant that a) you fully understand and 	agree to be bound by these terms and conditions; b) that all the personal information and 	documentation you provided to us are true and correct; c) that you will at all relevant times comply 	with all applicable laws when providing the services (which includes being compliant with POPIA); 	d) and that you are legally allowed to enter into an agreement with us, to use the app and providing 	the services. </Text>
            <Text style={styles.tncListItems}>3.3	We may in our sole discretion either accept or reject an application, without having to give any 	reasons therefore. </Text>
            <Text style={styles.tncListItems}>3.4	Upon successful completion of your application as a driver, you will be provided with your personal 	account which will be accessible to you, through a unique username and password.  </Text>
            <Text style={styles.tncListItems}>3.5	You are responsible for keeping your username and password secure. We are not responsible for 	any losses you may incur due to a third party misusing your username and/or password. You will 	be personally liable for all and any transactions concluded on your account. </Text>
            <Text style={styles.tncListItems}>3.6	You agree to notify us immediately should you become aware or suspect that someone else is 	accessing or using your user name and password and you agree to take all reasonable steps to 	mitigate any loss or harm to you. </Text>
            <Text style={styles.tncListItems}>3.7	You agree that you will not in any way use any mobile device, software or other instrument to 	interfere or attempt to interfere with the proper working of the app.  </Text>
            <Text style={styles.tncListItems}>3.8	You are responsible to keep your account and profile information updated at all times and if any 	information, is not in accordance with these terms and conditions or not true and / or correct, then 	we have the right to refuse your application and/or registration and/or suspend and/or terminate 	your account immediately and without any notice to you. </Text>
            <Text style={styles.tncListItems}>3.9	You hereby agree and undertake not to authorise any other person to use your account and / or to 	provide the services on your behalf through the app. </Text>
            <Text style={styles.tncListItems}></Text>

            <Text style={styles.sectionHeader}>DRIVER’S WARRANTIES AND OBLIGATIONS</Text>
            <Text style={styles.tncListItems}>4.1	You hereby guarantee that: </Text>
            <Text style={styles.tncListItems}>4.1.1	you will provide the services in accordance with these terms and conditions and all and any 	applicable laws; and </Text>
            <Text style={styles.tncListItems}>4.1.2	you have all licenses and other documents required to provide the services and that you will 	maintain the validity of such documentation. </Text>
            <Text style={styles.tncListItems}>4.2	You hereby undertake to: </Text>
            <Text style={styles.tncListItems}>4.2.1	provide the services in a professional manner, maintain the service standard and to perform the 	services in the best interest of a user; </Text>
            <Text style={styles.tncListItems}>4.2.2	not make any unauthorised stops; </Text>
            <Text style={styles.tncListItems}>4.2.3	adhere to all and any applicable traffic acts and regulations; </Text>
            <Text style={styles.tncListItems}>4.2.4	make all reasonable efforts to deliver a package within a reasonable time; </Text>
            <Text style={styles.tncListItems}>4.2.5 take all reasonable attempts to prevent any loss or damage to a package;</Text>
            <Text style={styles.tncListItems}>4.2.6	not to access the contents of the package nor allow any unauthorised or illegal access to the 	package; </Text>
            <Text style={styles.tncListItems}>4.2.7	not disclose to any third party, any personal information of a user. You must keep all and any 	personal information strictly confidential and in compliance with the provisions of POPIA; </Text>
            <Text style={styles.tncListItems}>4.2.8	indemnify us against all and any claims and / or actions against us by any other person as a result 	of your breach of these terms and conditions; </Text>
            <Text style={styles.tncListItems}>4.2.9	not use the app for any illegal purpose nor for any illegal acts to violate the personal and property 	rights or privacy of any person; </Text>
            <Text style={styles.tncListItems}>4.2.10	accept all orders placed on the app within your capacity and ability and once you have accepted 	an order not to later reject such accepted order; </Text>
            <Text style={styles.tncListItems}>4.2.11	not to consume drugs or alcohol while you are on the app and / or rendering the services; </Text>
            <Text style={styles.tncListItems}>4.2.12	to be properly and decently dressed at all times; </Text>
            <Text style={styles.tncListItems}>4.2.13	at all relevant times to act in good faith and with integrity; and </Text>
            <Text style={styles.tncListItems}>4.2.14	to adhere to all and any Covid-19 protocols and ensure that you and your vehicle are at all relevant 	times sanitized, clean and hygienic. </Text>
            <Text style={styles.tncListItems}>4.3	You hereby acknowledge that: </Text>
            <Text style={styles.tncListItems}>4.3.1	you are responsible, at your sole expense, to provide and maintain all equipment and means that 	are required to perform the services, specifically maintaining your vehicle in a good operating 	condition and in accordance with any regulatory requirements; </Text>
            <Text style={styles.tncListItems}>4.3.2	you are responsible for paying all and any costs you incur in performing the services, including but 	not limited to fuel, e-toll charges, parking, data, vehicle insurance etc.; </Text>
            <Text style={styles.tncListItems}>4.3.3	you provide the services to a user as an independent contractor and not as our agent, an employee 	nor partner of us; </Text>
            <Text style={styles.tncListItems}>4.3.4	our relationship shall not be deemed to be one of employer/employee and you hereby specifically 	agree that we shall not in any way be liable to you under the provisions of any legislation which 	purports to create such an employment relationship; </Text>
            <Text style={styles.tncListItems}>4.3.5	nothing in these terms and conditions shall be deemed or construed as creating a relationship of 	principal and agent, employment, partnership or joint venture between us; </Text>
            <Text style={styles.tncListItems}>4.3.6	you shall be solely responsible for accounting to the appropriate authorities for your income tax or 	any other moneys required to be paid in terms of legislation, or any other law; and </Text>
            <Text style={styles.tncListItems}>4.3.7	you shall use a vehicle which is suitable and appropriate for the delivery of a package and which 	reasonably ensures safe delivery of the package and prevent loss or damage to the package. </Text>
            <Text style={styles.tncListItems}></Text>
            <Text style={styles.tncListItems}></Text>
            <Text style={styles.tncListItems}></Text>
            <Text style={styles.tncListItems}></Text>

            <Text style={styles.sectionHeader}>5. ORDERS</Text>

            <Text style={styles.tncListItems}>5.1	Even though you will have the sole discretion to either accept or decline an order placed by a user, 	we implore on you to accept all orders placed on the app within your capacity and ability. </Text>
            <Text style={styles.tncListItems}>5.2	Orders by users may only be placed and accepted during business hours on business days. </Text>
            <Text style={styles.tncListItems}>5.3	Upon acceptance of an order, you will be provided with a specific code, which code must be given 	to you by the relevant user upon collection and recipient delivery of the package.  </Text>
            <Text style={styles.tncListItems}></Text>



            <Text style={styles.sectionHeader}>6. PACKAGING RESTRICTIONS, CANCELLATION OF AN ORDER AND DELIVERY</Text>
            <Text style={styles.tncListItems}>6.1	The user is solely responsible for the packaging of a package.</Text>
            <Text style={styles.tncListItems}>6.2 	The package may not exceed a maximum weight of 30kg (thirty kilograms) and the dimensions 	may not exceed 70cm (seventy centimetres) x 45cm (forty-five centimetres) x 45cm (forty-five 	centimetres).  You are required to acquaint yourself with what a package, as described in this 	clause 6.2 will look like in size and weight, and should you be of the reasonable belief that the 	package exceeds these maximum requirements, you are entitled to refuse to take receipt thereof. </Text>
            <Text style={styles.tncListItems}>6.3	Neither of us have any knowledge as to the details of the contents of a package, and only in the 	event that you are required by any governmental authority including the SAPS and/or private 	security, may you open and inspect the package with such official and during which time you must 	take video recordings of the opening and inspecting of the package in the presence of the person 	so requiring the same. </Text>
            <Text style={styles.tncListItems}>6.4 	You are required to acquaint yourself with the restricted items in our terms and conditions for users, 	and should you be of the reasonable belief and/or have a suspicion that the package contains any 	of such restricted items you are entitled to demand from the user to divulge the contents of such 	package. Should the user fail and/or refuse to divulge the contents of such package to you, for any 	reason whatever, you are entitled, in your reasonable discretion, to refuse to accept the package 	for delivery. </Text>
            <Text style={styles.tncListItems}>6.5	Should a user or the authorised individual not be present at the collection and/or delivery address, 	you must attempt to contact the user and stay at such address for at least 5 (five) minutes.  Should 	collection and/or delivery of the package not be able after the said time, you shall be entitled to 	cancel the order and the user will be informed of such cancellation via SMS. In the event that the 	recipient of the package or his/her authorised representative, is not be at the delivery address 	and/or unable for whatever reason to take receipt of the package and after you having attempted 	to make contact with the user and have waited for at least 5 (five) minutes, you must return the 	package to our address and we will let the user know.</Text>
            <Text style={styles.tncListItems}>6.6	Delivery of the package shall be deemed to have taken place upon the recipient signing 	electronically for the delivery. </Text>
            <Text style={styles.tncListItems}>6.7	Our and / or the driver’s obligation to deliver a package under an order, will be duly fulfilled when 	the package is delivered at the delivery address.  </Text>
            <Text style={styles.tncListItems}>6.8	We do not accept any responsibility for any errors or omissions on the app, a force majeure 	event resulting in late or non-delivery of a package by you and the late delivery of a 	package as a result of traffic, load shedding. We will further not be liable for any loss, damage or 	deterioration of any package in your possession. </Text>
            <Text style={styles.tncListItems}></Text>
            <Text style={styles.tncListItems}></Text>
            
          
            
            <Text style={styles.sectionHeader}>
7. PRIVACY POLICY AND THE PROTECTION OF PERSONAL INFORMATION ACT, 3 OF 2013 (“POPIA”)</Text>
            <Text style={styles.tncListItems}>
7.1 YOU ARE REQUESTED TO ACCESS OUR PRIVACY POLICY AND INFORMED CONSENT NOTICE which is available on our website and/or the app.</Text>
            <Text style={styles.tncListItems}>7.2 The said Privacy Policy is applicable to a) all and any of our electronic platforms which might be owned, used or hosted by us and / or accessed by us; b) and all and any data subjects who access and make use of our electronic platforms; and c) all and any of our personal information.</Text>
            <Text style={styles.tncListItems}>7.3 BY ACCESSING OR USING OUR ELECTRONIC PLATFORMS OR BY PROVIDING US WITH YOUR PERSONAL INFORMATION, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THE PRIVACY POLICY, YOU AGREE TO BE BOUND TO THIS PRIVACY POLICY AND YOU CONSENT TO US PROCESSING YOUR PERSONAL INFORMATION, WHICH WE UNDERTAKE TO PROCESS STRICTLY IN ACCORDANCE WITH THE PRIVACY POLICY AND POPIA.</Text>
            <Text style={styles.tncListItems}>
7.4 You hereby agree and acknowledge that in order for us and the driver/s to render the services to you, we shall require access to and use your personal information and we shall further be required to furnish the driver/s with your personal information in order to render the services to you. You hereby consent to us accessing and using your personal information and furnishing the same to the driver/s in order to render the services to you.</Text>
            <Text style={styles.sectionHeader}>8. LINKS TO OTHER WEBSITES</Text>
            <Text style={styles.tncListItems}>From time to time this website and the app may also include links to other websites. These links are provided for your ease to provide further information. They do not signify that we endorse the website(s) and we have no responsibility for the content of the linked website(s).</Text>
            <Text style={styles.sectionHeader}>9. DISCLAIMER AND LIABILITY AND INDEMNITY </Text>

            <Text style={styles.tncListItems}>9.1 	The use of the website and/or the app and/or the rendering of the services, are entirely at 	your sole risk and you take full responsibility for all and any risk or loss resulting from the 	use thereof or reliance on any information on the website and/or app and/or from the 	rendering of the services. </Text>
            <Text style={styles.tncListItems}>9.2	To the maximum extent permitted by law, you agree that we, our shareholders, officers, 	directors, employees, representatives, or others are not liable for: </Text>
            <Text style={styles.tncListItems}>9.2.1	any claims, damages, losses, liabilities and expenses that you may incur as a result of using 	the app and in rendering the services, including but not limited to any direct, indirect or 	consequential loss or damages, any loss of production, loss of profit, loss of revenue, loss 	of contract, loss of or damage to goodwill or reputation, loss of claim and any other type of 	loss or damage; </Text>
            <Text style={styles.tncListItems}>9.2.2	any inaccuracy relating to the information (including personal data, comments, and 	performance ratings) of the users, if any; and </Text>
            <Text style={styles.tncListItems}>9.2.3	the services rendered by you. </Text>
            <Text style={styles.tncListItems}>9.3	Whilst we take reasonable measures to ensure that the content of the website and/or app is 	accurate and complete, we make no representations or warranties, whether express or 	implied, as to the timeliness, availability or functionality of the website and/or the app and/or 	as to the accuracy, completeness or reliability of any information on	the website and/or 	the app. If any such representations or warranties are made any of our representatives, we 	shall not be bound thereby. You acknowledge that such information and materials may 	contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies 	or errors to the fullest extent permitted by law. </Text>
            <Text style={styles.tncListItems}>9.4	In addition to the disclaimers contained elsewhere in these Terms and Conditions, we also 	make no warranty or representation, whether express or implied, that the information 	available on the website and/or the app are free of viruses, spyware, malware, trojans, or 	any other data or code which is able to corrupt, destroy, compromise, disrupt, disable, 	harm, jeopardise or otherwise obstruct or delay, in any manner the operation, constancy, 	security functionality or content of your computer system, computer network, hardware or 	software in any way. You accept all risk associated therewith, save where such risks arise 	due to our gross negligence or wilful misconduct. We thus disclaim all liability for any 	damage, loss or liability of any nature whatsoever arising out of or in in connection with 	your access to or use of the website and/or the app. </Text>
            <Text style={styles.tncListItems}>9.5	We undertake to use reasonable endeavours to maintain the operation of the website and/or 	the app, however we cannot guarantee continuous, uninterrupted or 	secure access to the 	service and operation of the website and mobile systems. We will not be liable for any delay 	or failure in the running of the services, or the working of the website and/or mobile 	systems, where such failure is due to factors beyond our control. </Text>
            <Text style={styles.tncListItems}>9.6	We will not be held liable for any indirect, special or consequential losses of any kind 	whatsoever arising from, or in connection with the services (whether in contract, statute or 	delict).  </Text>
            <Text style={styles.tncListItems}>9.7	You are liable for the breach of any of these terms and conditions or any other applicable 	laws or regulations and you hereby indemnify us and undertake to hold us harmless for any 	direct and / or indirect loss or damage, loss of profits, expense, penalty, fine that we may 	incur in connection with your breach of these terms and conditions and applicable laws and 	regulations. </Text>
            <Text style={styles.tncListItems}>9.8	The app is provided on an “as is” and “as available” basis and reliant on the behaviour 	of users and we do guarantee that your usage of the app will result in any orders being 	placed by users with you. </Text>
            <Text style={styles.tncListItems}></Text>
            <Text style={styles.tncListItems}></Text>
            <Text style={styles.tncListItems}></Text>
            
            
            <Text style={styles.sectionHeader}>10.	TERMINATION </Text>
            <Text style={styles.tncListItems}>10.1	We may, in our sole discretion, suspend or terminate, temporarily or permanently, your account at 	any time if you breach any of the representations, warranties and obligations contained in these 	terms and conditions and / or any applicable laws, or cause harm to our reputation or 	business or we may, suspend or terminate, temporarily or permanently, your account by giving you 	1 (one) week’s written notice and without the need to give you a reason therefore. </Text>
            <Text style={styles.tncListItems}>10.2	That stated in clause 10.1 above, will be without prejudice to any right that we might have to take 	any appropriate legal action and we will not incur any liability for damages or compensation for the 	termination, cancellation or suspension of your account. </Text>
            <Text style={styles.tncListItems}>10.3	We may in our sole discretion terminate, suspend and modify this website and/or the app, with or 	without notice to you. We will not be liable to you in the event that we choose to suspend and / or 	terminate the website and/or the app and/or services, should you fail to comply with your 	obligations under these terms and conditions, without any prejudice to any claims for damages or 	otherwise we may have against you. </Text>
            <Text style={styles.tncListItems}>10.4	We are entitled to immediately suspend or terminate your access to the website and / or the app 	and / or the services, should we suspect fraud and/or the unlawful use of the website and / or app 	and / or services. </Text>
            <Text style={styles.tncListItems}></Text>
            
            <Text style={styles.sectionHeader}>
            11. GOVERNING LAW AND JURISDICTION </Text>
            <Text style={styles.tncListItems}>12.1	These terms and conditions constitute the entire agreement between you and us in respect of the 	use of the website and/or the app and/or the services. </Text>
            <Text style={styles.tncListItems}>12.2	These terms and conditions of use shall supersede any contrary terms or conditions incorporated 	by you in your communications with us and any such conflicting terms or conditions will not form 	part of the agreement concluded between us. </Text>
            <Text style={styles.tncListItems}>12.3	Our failure to enforce any provision of this agreement strictly will not be construed as a waiver of 	any provision or right. In the event that a portion of this agreement is held unenforceable or invalid 	by any competent authority, the unenforceable portion will be construed in accordance with 	applicable law as nearly as possible to reflect the original intentions of the parties, and the 	remainder of the provisions will remain in force and effect to the fullest extent permitted by the 	law. </Text>
            <Text style={styles.tncListItems}>12.4	We may cede, delegate, transfer and assign our rights, obligations and duties hereunder to any 	other person, without your prior written consent and without written notice to you. You however, 	may not subcontract, cede, delegate, transfer or assign any of your rights, obligations or duties 	hereunder to any other person without our prior written consent.  </Text>
            <Text style={styles.tncListItems}>12.5	Should you require any assistance, you can email us at info@clickndeliver.co or call us on 	08600 	CLICK. </Text>
            <Text style={styles.tncListItems}></Text>
            

        </ScrollView>
                            {/* <View style={{height: 15}}></View>
                                    <View style={{ flexDirection: 'row', alignItems:'center'}}>
                        {/* I agree to the Terms & Conditions and Privacy Policy */}
                        {/* <Icon name='verified' size={15} style={{top: 4}}></Icon> 
                                    <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        style={styles.checkbox}
                                    />
                                        <Text style={{fontSize:12}}>I agree to the <Pressable onPress={() => props.navigation.navigate(PoliciesPage)}><Text style={{fontSize:12, color: 'teal', top: 3}}>Terms & Conditions</Text></Pressable></Text>
                                    </View>  

                            <View style={{height: 15}}></View>
                        <View style={{ elevation: 5 }}>
                            <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                                <Text style={{ fontSize: 15, color:'black', bottom:'5%'}}>Download</Text>
                            </Pressable>
                        </View>       */}
                    </View> 


        </View>
        
        
     );
}
 
export default LoginTerms;