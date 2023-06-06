const lists = [
    {
        'b': 'Collection of User Information',
        'p': 'We do not collect any personal information from users visiting our website.'
    },
    {
        'b': 'Email and Newsletter',
        'p': 'We do not send emails or newsletters to users.'
    },
    {
        'b': 'Digital Analytics Software',
        'p': 'We utilize Google Analytics, a digital analytics software, to gather anonymous information about website traffic and usage patterns. This helps us understand user preferences and improve our website. Google Analytics may collect and store cookies and usage data in accordance with its privacy policy. Please refer to Google\'s Privacy Policy for more information.'
    },
    {
        'b': 'Displaying Ads',
        'p': 'We do not display ads on our website.'
    },
    {
        'b': 'Facebook Pixel',
        'p': 'We do not have Facebook Pixel installed on our website.'
    },
    {
        'b': 'Retargeting Advertising',
        'p': 'We do not engage in retargeting advertising.'
    },
    {
        'b': 'Use of Cookies and Local Storage',
        'p': 'We may use cookies and local storage technologies to enhance user experience and customize content. By using our website, you consent to the use of cookies and local storage in accordance with this Privacy Policy.'
    },
    {
        'b': 'Social Media Login Providers',
        'p': 'We do not utilize any social media login providers.'
    },
    {
        'b': 'Children\'s Online Privacy Protection Act (COPPA)',
        'p': 'Our services are not offered to users under the age of 13. We do not knowingly collect any personal information from children under 13 years of age.'
    },
    {
        'b': 'Contact Information',
        'p': 'If you have any questions or concerns regarding this Privacy Policy, please contact us:<br>' + 
            '<ul><li>Email: rondeobalos@gmail.com</li><li>Email: rondeobalos@gmail.com</li><li>Email: rondeobalos@gmail.com</li></ul>'
    },
    {
        'b': 'Geolocation, Contacts, Camera Access, and Photo Gallery Access',
        'p': 'We do not request or access geolocation data, contacts, camera, or photo gallery on our website.',
    },
    {
        'b': 'Online Payments',
        'p': 'We do not accept online payments on our website.'
    }
];
ReactDOM.render(
    <div>
        <h1>Privacy Policy</h1>
        <p>Effective Date: June 6, 2024</p>
        <p>This Privacy Policy governs the manner in which personal information is collected, used, and maintained on the Portfolio website (https://rondeo-balos.github.io/). Please read this Privacy Policy carefully to understand how we handle your personal information.</p>
        <List lists = {lists} />
        <p>CalOPPA Compliance: We strive to be compliant with the California Online Privacy Protection Act (CalOPPA) and have adapted our Privacy Policy accordingly.</p>
        <p>GDPR Compliance: We also aim to be compliant with the General Data Protection Regulation (GDPR) and have adapted our Privacy Policy accordingly.</p>
        <p>Please note that this Privacy Policy may be subject to change. Any updates will be posted on this page. It is your responsibility to review this Privacy Policy periodically and stay informed about any modifications.</p>
        <p>By using our website, you agree to the terms outlined in this Privacy Policy.</p>
        <p>By using our website, you agree to the terms outlined in this Privacy Policy.</p>
    </div>,
    document.getElementById( 'root' )
);

function List( props ) {
    const list = props.lists;
    const entries = list.map( (entry) => {
        return <Item b={entry.b} p={entry.p} />
    });
    return(
        <ol>{entries}</ol>
    )
}

function Item( props ) {
    return(
        <li>
            <b>{props.b}</b>
            <p>{props.p}</p>
        </li>
    )
}