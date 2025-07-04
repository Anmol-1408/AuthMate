import Header from '@/components/Headers';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <>
            {/* Sticky animated Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg"
            >
                <Header />
            </motion.div>

            {/* Main page content */}
            <main className="min-h-screen pt-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="py-12"
                >
                    <section className="bg-gray-50 dark:bg-gray-800 py-10">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                Privacy Policy
                            </h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                                Last updated on May 10th, 2025
                            </p>

                            <p className="mb-6">
                                This privacy policy sets out how AuthMate uses and protects any information that you give AuthMate when you visit our website and/or agree to purchase from us.
                            </p>
                            <p className="mb-6">
                                AuthMate is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
                            </p>
                            <p className="mb-6">
                                AuthMate may change this policy from time to time by updating this page. You should check this page periodically to ensure that you are happy with any changes.
                            </p>

                            <h2 className="text-xl font-semibold mb-4">We may collect the following information:</h2>
                            <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                                <li>Name</li>
                                <li>Contact information including email address</li>
                                <li>Demographic information such as postcode, preferences, and interests, if required</li>
                                <li>Other information relevant to customer surveys and/or offers</li>
                            </ul>

                            <h2 className="text-xl font-semibold mb-4">What we do with the information we gather</h2>
                            <p className="mb-6">
                                We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
                            </p>

                            <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                                <li>Internal record keeping.</li>
                                <li>We may use the information to improve our products and services.</li>
                                <li>We may periodically send promotional emails about new products, special offers, or other information which we think you may find interesting using the email address you have provided.</li>
                                <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax, or mail. We may use the information to customize the website according to your interests.</li>
                            </ul>
                            <p className="mb-6">
                                We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures.
                            </p>

                            <h2 className="text-xl font-semibold mb-4">How we use cookies</h2>
                            <p className="mb-6">
                                A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual, tailoring operations to your needs, likes, and dislikes.
                            </p>
                            <p className="mb-6">
                                We use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                            </p>
                            <p className="mb-6">
                                Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you other than the data you choose to share with us.
                            </p>
                            <p className="mb-6">
                                You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                            </p>

                            <h2 className="text-xl font-semibold mb-4">Controlling your personal information</h2>
                            <p className="mb-6">
                                You may choose to restrict the collection or use of your personal information in the following ways:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700 dark:text-gray-300">
                                <li>Whenever you're asked to fill in a form on the website, look for the box you can check to indicate that you do not want the information to be used for direct marketing purposes.</li>
                                <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us.</li>
                            </ul>
                            <p className="mb-6">
                                We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties that we think you may find interesting—only if you consent.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300">
                                If you believe that any information we are holding on you is incorrect or incomplete, please write to:
                                <br />
                                <strong>EAST BABARPUR, Shahdara, GALI NO.- 03, E-679 / U.G.F, SANJAY GANDHI MARG, Babar Pur, North East Delhi 110032</strong> or contact us as soon as possible. We will promptly correct any incorrect information.
                            </p>
                        </div>
                    </section>
                </motion.div>
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
