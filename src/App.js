import './App.css';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const Support = () => {
  return (    <div className="App">
    <h4> Support Mail <a href={'mailTo:riddlegame.contact@gmail.com'}>riddlegame.contact@gmail.com</a> </h4>
  </div>)
}
function Policy() {
  return (
    <div className="App">
      <h3> Privacy Policy </h3>
      <p>
        Riddle Games provides this Privacy Policy to explain how it collects, stores, and uses the information collected
        in connection with Riddle’s software applications, and websites (collectively, “services”). Riddle respects the
        privacy of their users and is committed to protecting the user’s information. You have a right to know our
        practices regarding the information we may collect and use when you use our services.
        The types of information we collect and how we collect it: Personal Information
        Riddle collects the advertising identifier (Apple’s IDFA and Google’s advertiser ID) , and a unique identifier
        for each user in our mobile games.
        Riddle integrates third party SDKs into our services. These SDKs are used for advertising to our users,
        analysing service usage, enabling in-app purchases, or providing game services
        including achievements, leaderboards, and account management. We allow third party operators this collected data
        solely for internal operations of the service as permitted by applicable rules and laws. This could include, but
        is not limited to, persistent advertising identifiers, geolocation information, and IP address. We encourage you
        to review the policies of the third-party operators listed below.
        Should a user explicitly provide it to us when prompted, we will collect email addresses of our users for our
        mailing list(s), account recovery, or customer support purposes.
        Some of our services require or allow a user to provide a screen name so they can be identified within the
        service.
        Non-personal Information
      </p>

      <p>
        We allow third parties to collect some information by which users cannot be identified. Non-personal information
        may include technical information about your device, such as your browser type, screen resolution, device type,
        language, type of operating
        system and geo location (only general location). Non-personal information is gathered by third party services
        while you are accessing the service. They are allowed to use this information to conduct research and analysis,
        but only for strictly limited purposes. We encourage you to review the policies of the third- party operators
        listed below.
        Internally, Riddle also reserves the right to collect anonymous information for research and analysis. This
        information is generic in nature and cannot be used to individually identify a user. This information is
        collected each time a user runs one of our services.
        Service Specific Information
      </p>

      <p>
        Some Riddle services allow users to send messages to each other while playing a game. These messages are then
        transmitted and stored on Riddle controlled servers, or on the servers of one of our third-party service
        providers.
        In order to support some services, Riddle may collect identifiers
        associated with a user’s account on social networks like Facebook or Twitter, or game services like Apple Game
        Center, Google Play Game Services, or Amazon Game Circle.
        Web browser cookies Our Site may use "cookies" to enhance User experience. User's web browser places cookies on
        their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to
        set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that
        some parts of the Site may not function properly.
        What we do with the personal information we collect
      </p>

      <p>
        Advertisers collect data regarding advertisement performance, user’s interaction with ads, our apps and user’s
        interests. Collected data may include user’s personal information in order to serve users ads and for the third
        parties’ legitimate business interests.
        Riddle and third-party operators may use collected personal data to help measure the effectiveness of Riddle’s
        promotional campaigns.
        Riddle collects persistent identifiers in order to provide support for our services to our users. Additionally,
        Riddle uses persistent identifiers to send promotions regarding new products or updates to our users. If we keep
        track of persistent advertising identifiers, it allows us to only notify these users about new products that
        they will actually be interested in.
        What we do with the non-personal information we collect
      </p>

      <p>
        Third party operators are allowed to collect and use non-personal information to conduct research and analysis,
        or to target advertisements, or other limited purposes. This information cannot be used to individually identify
        any user. We encourage you to review the policies of the third-party operators listed below.
        Similarly, Riddle also uses non-personal information to conduct
        research and analysis. We do this to improve our services in future updates or to gain knowledge about how our
        users our interacting with the service.
        What we do with service specific information we collect
      </p>

      <p>
        If Riddle collects identifiers associated with a user’s account on a game service like Apple Game Center, Google
        Play Game Services, or Amazon Game Circle, then it is explicitly required for some feature in that service. For
        example, the identifier could be saved so that a user’s connections on the social network can see their high
        score or progress in the game. As stated elsewhere in this policy, you can contact us to have this information
        deleted for yourself or your child under the age of 13.
        How to opt-out of targeted advertising If you would like to opt-out of interest-based advertising, you may do so
        in your mobile device’s settings. On iOS, this can be done by turning on the Limit Ad Tracking option under
        Settings -> Privacy -> Advertising. On
        Android, this can typically be found under Settings -> Google -> Ads -> Opt out of Ads Personalization, although
        the exact location of this setting may differ depending on your device make and Android version. To learn more
        about targeted advertising and additional options that you can take regarding targeted advertising, please
        visit https://youradchoices.com/.
      </p>

      <h3>Children </h3>
      <p>
        We understand the importance of protecting the privacy and safety of children using our services, as outlined by
        the Children’s Online Privacy Protection Act of 1998 (COPPA). Accordingly, we do not knowingly collect, use, or
        disclose personal information from children under 13.
        When we determine that a service is directed and children under the age of 13, we will configure all of our
        internal systems such that no personal information will be collected, and configure all relevant third-party
        integrations appropriately such that no personal information will be collected for users of that service. For
        additional information, please refer to the privacy policies of our third-party operators to understand what
        they are doing to further protect your child’s privacy.
        Services that are determined to be targeted at children will still receive advertisements from our third-party
        operators, and promotions from Riddle using its internal systems. In this case the ads and promotions will not
        be targeted based on collected data, but will be broadcast to all users of the service.
        If you are a parent of a child under 13 years of age and you believe your child has provided us with personal
        information, please contact us using the information below and we will delete the information from our systems.
        Disclosure of Personal information
      </p>

      <p>
        We understand the importance of protecting the privacy and safety of children using our services, as outlined by
        the Children’s Online Privacy Protection Act of 1998 (COPPA). Accordingly, we do not knowingly collect, use, or
        disclose personal information from children under 13.
        When we determine that a service is directed and children under the age of 13, we will configure all of our
        internal systems such that no personal information will be collected, and configure all relevant third-party
        integrations appropriately such that no personal information will be collected for users of that service. For
        additional information, please refer to the privacy policies of our third-party operators to understand what
        they are doing to further protect your child’s privacy.
        Services that are determined to be targeted at children will still receive advertisements from our third-party
        operators, and promotions from Riddle using its internal systems. In this case the ads and promotions will not
        be targeted based on collected data, but will be broadcast to all users of the service.
        If you are a parent of a child under 13 years of age and you believe your child has provided us with personal
        information, please contact us using the information below and we will delete the information from our systems.
        Disclosure of Personal information
      </p>

      <p>
        The scenarios in which we will share your personal data are as follows:

        we determine that it is required by law;
        we have a good faith belief it is necessary to protect our rights or property;
        we are participating in a merger, acquisition, liquidation, dissolution or sale of assets;
        we have your consent; and
        as described above in relation to third-party operators collecting information from our services.
      </p>

      <p>
        Under no other circumstances will Riddle share, sell, rent, or release your data. You may contact Riddle to
        request access, change, update or delete your personal information at any time via
        email: riddlegame.contact@gmail.com You have the right to these options as well as the right to not be
        discriminated against for exercising these options. A small fee may be imposed for access and disclosure of your
        personal information, where permitted under applicable law.
        Security

        We follow generally accepted industry standards and internal procedures to protect personal information
        submitted to us, both during transmission and once we receive it.
        Third-party Operators
      </p>


      <p>

        Advertising Networks: Riddle allows advertisements from the Third-Party ad networks to be displayed in our
        services. Riddle makes commercially reasonable efforts to ensure that the third- party ad networks are
        configured to comply with applicable privacy laws, and we reasonably believe this to be the case for each of
        them. If we determine a service to be directed at children under the age of 13, we configure each of these ad
        networks to be compliant with the Children’s Online Privacy Protection Act of 1998 (COPPA). For persons in
        European Union countries, we also configure networks to be compliant with the General Data Protection Regulation
        of 2016 (GDPR).
        In-App Purchases: In order to make in-app purchases, a user must
        use a third-party checkout options that we have integrated with our services to finalize and pay for their
        order. The third-party operator’s privacy policy and security practices will apply to this
        process a user’s information. We encourage you to read that privacy statement before providing your information.
        Game Services: Many of our services integrate either Apple Game
        Center, Google Play Game Services, or Amazon Game Circle. Each of these third-party operators offer their own
        privacy policy (listed below), and we encourage you to review them.
        Analytics: Riddle makes use of Third-Party service in order to
        measure how users utilize our services so that we may improve them, and to measure the effectiveness of our
        advertising campaigns.
      </p>

      <p>
        Changes to this Privacy Policy
        We will periodically update this privacy policy to reflect changes in our information practices, and to add
        additional third-party operators. Please check back regularly, as your continued use of our services indicate
        your acceptance of any changes to this policy.
        This privacy policy was last updated May 16, 2022.
      </p>


      <h3> Privacy Policy Contact Information</h3>
      <p>
        If you have any questions about our privacy policy, please contact us via email at riddlegame.contact@gmail.com
        mail us at:
      </p>


    </div>
  );
}
