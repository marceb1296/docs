import {
	Docs,
	DocsAlertDanger,
	DocsAlertInfo,
	DocsAlertWarning,
	DocsCode,
	DocsTableStatus,
	DocsTableTypes,
	DocsTableView,
} from "../src/lib";
import { IDocs, IDocsSideNav } from "../src/interfaces";

const content: IDocs = {
	introduction: {
		id: "introduction",
		title: "Introduction",
		data: [
			"django_crypto_auth is a Django app to make token based authentication using a refresh token, both encrypted with a hash base, making more hard to access an attacker even if the db were compromised.",
			"When successfully authenticated, provide two token for request; main and refresh one, enabling each user to possess a unique token that gets removed from the server-side once the user re-authenticate or logs out. Accompanied by an expiration key and the user.",
			<DocsCode>
				{`{
    "token": "token",
    "expiry": n,
    "expiry_date": date,
    "refresh_token": "refresh token",
    "user": "username"
}`}
			</DocsCode>,
			"Additionally, the system offers a feature that allows a currently logged-in user to delete all of their stored tokens on the server-side, thereby necessitating the re-authentication of all users.",
			<DocsAlertInfo>
				<p>
					Only{" "}
					<i>
						<b>token</b>
					</i>{" "}
					is saved on db, the{" "}
					<i>
						<b>refresh_token</b>
					</i>{" "}
					is created and verified from main token.
				</p>
			</DocsAlertInfo>,
			<DocsAlertDanger>
				<p>
					The <b>expiry_date</b> field is an instance of a
					`DateTimeField`. This means that dates stored in this field
					will be returned in the format specified by the{" "}
					<b>TIME_ZONE</b>
					setting in your `settings.py` file.
				</p>
			</DocsAlertDanger>,
		],
	},
	setup: {
		id: "setup",
		title: "Setup",
		data: [
			"Clone the repository:",
			<DocsCode>
				git clone https://github.com/marceb1296/crypto_auth
			</DocsCode>,
			"Add it to your installed apps",
			<DocsCode>
				{`INSTALLED_APPS = [
    ...
    'crypto_auth',
]`}
			</DocsCode>,
			"And finally run migrate",
			<DocsCode>python manage.py migrate</DocsCode>,
		],
	},
	settings: {
		title: "Settings",
		childs: [
			"tokenShuffle",
			"serializer",
			"tokenKeyword",
			"tokenLimit",
			"tokenSubsetLength",
			"tokenExpiry",
		],
	},
	tokenShuffle: {
		id: "crypto_auth_token_shuffle",
		title: "CRYPTO_AUTH_TOKEN_SHUFFLE",
		data: [
			"django_crypto_auth needs a key to successful encrypt variable, you can create it easily using 'create_token_shuffle' from helper.",
			<DocsCode>
				{`# go to shell
python manage.py shell

# shell
> from django_crypto_auth.helper import create_token_shuffle
> create_token_shuffle()
> Token shuffle for django_crypto_auth was successfully created!`}
			</DocsCode>,
			<DocsAlertInfo>
				<p>
					django_crypto_auth will try to retrieve the{" "}
					<b>CRYPTO_AUTH_TOKEN_SHUFFLE</b> first from <b>helper</b>{" "}
					file, if fails will take it from <b>settings.py</b>
				</p>
			</DocsAlertInfo>,
			<DocsAlertWarning>
				<p>
					The token created from <b>create_token_shuffle</b> is saved
					at the end of the file <b>helper</b>, its highly recommend
					to store it into an environment variable
				</p>
			</DocsAlertWarning>,
		],
	},
	serializer: {
		id: "crypto_auth_token_serializer",
		title: "CRYPTO_AUTH_TOKEN_SERIALIZER",
		data: [
			"Customize django_crypto_auth Serializer",
			<DocsCode>
				CRYPTO_AUTH_TOKEN_SERIALIZER =
				"myapp.serializer.SerializerClass"
			</DocsCode>,
		],
	},

	tokenKeyword: {
		id: "crypto_auth_token_keyword",
		title: "CRYPTO_AUTH_TOKEN_KEYWORD",
		data: [
			<DocsTableTypes
				body={[
					[
						"CRYPTO_AUTH_TOKEN_KEYWORD",
						"String",
						"Yes",
						"Header keyword to use for authentication.",
						"TSESSION",
					],
				]}
			/>,
			<p>
				<b>Usage:</b>
			</p>,
			<DocsCode>
				{`curl -X POST -H "Authorization: TSESSION <token | refresh_token>" -H "Content-Type: application/json" -d '{"key1":"value1"}' <endpoint>`}
			</DocsCode>,
			<p>
				<b>Response Codes:</b>
			</p>,
			<DocsTableStatus
				body={[
					["200", "Authentication successful"],
					[
						"401",
						<>
							<p>
								Invalid token header. No credentials provided.
							</p>
							<p>
								Invalid token header. Token string should not
								contain spaces.
							</p>
							<p>
								Invalid token header. Token string should not
								contain invalid characters.
							</p>
						</>,
					],
				]}
			/>,
		],
	},
	tokenLimit: {
		id: "crypto_auth_max_token_limit",
		title: "CRYPTO_AUTH_MAX_TOKEN_LIMIT",
		data: [
			<DocsTableTypes
				body={[
					[
						"CRYPTO_AUTH_MAX_TOKEN_LIMIT",
						"Int",
						"Yes",
						"Token limit per user",
						"2",
					],
				]}
			/>,
			<p>
				<b>Response Codes:</b>
			</p>,
			<DocsTableStatus
				body={[
					["200", "Authentication successful"],
					[
						"403",
						"Maximum amount of tokens allowed per user exceeded.",
					],
				]}
			/>,
		],
	},
	tokenSubsetLength: {
		id: "crypto_auth_subset_length",
		title: "CRYPTO_AUTH_SUBSET_LENGTH",
		data: [
			<DocsTableTypes
				body={[
					[
						"CRYPTO_AUTH_SUBSET_LENGTH",
						"Int",
						"Yes",
						<>
							<p>
								Defines the length of a subset taken from the
								main token <br />
								used to verify authentication and create a
								refresh token.
							</p>
							<p>Number must be between 2 and 15</p>
						</>,
						"4",
					],
				]}
			/>,
		],
	},
	tokenExpiry: {
		id: "crypto_auth_token_expiry",
		title: "CRYPTO_AUTH_TOKEN_EXPIRY",
		data: [
			<DocsTableTypes
				body={[
					[
						"CRYPTO_AUTH_TOKEN_EXPIRY",
						"List<keyword, n> | Tuple<keyword, n>",
						"Yes",
						<>
							<p>
								Used to determine the expire time of each token
							</p>
							<p>Keyword should be:</p>
							<ul>
								<li>seconds</li>
								<li>minutes</li>
								<li>hours</li>
								<li>days</li>
								<li>weeks</li>
							</ul>
						</>,
						"('minutes' 3)",
					],
				]}
			/>,
			<p>
				<b>Response Codes:</b>
			</p>,
			<DocsTableStatus
				body={[
					["200", "Authentication successful"],
					["401", "Token expired"],
				]}
			/>,
		],
	},
	views: {
		title: "Views",
		childs: ["loginView", "updateView", "logoutView", "logoutAllView"],
	},
	loginView: {
		id: "login-view",
		title: "LoginView",
		data: [
			"This view handles user authentication using Django Rest Framework's DEFAULT_AUTHENTICATION_CLASSES. It accepts a POST request containing the user's credentials and returns a response with a JSON object containing the user's authentication tokens.",
			<DocsCode>
				{`[
    <class 'rest_framework.authentication.SessionAuthentication'>, 
    <class 'rest_framework.authentication.BasicAuthentication'>
]`}
			</DocsCode>,
			<DocsAlertWarning>
				<p>
					If you're okay with this, be sure to set all security
					options, such as access only via HTTPS.
				</p>
				<p>
					Otherwise, set your custom authentication class in your
					custom view.
				</p>
			</DocsAlertWarning>,
			<DocsCode>
				{`# views.py

from crypto_auth.views import LoginView
from path.to import CustomAuthentication

class CustomView(LoginView):
    authentication_classes = [CustomAuthentication]`}
			</DocsCode>,
			<article>
				<strong>Methods:</strong>
				<p
					style={{
						marginLeft: "1em",
					}}>
					<b>get_response_data</b>
				</p>

				<p
					style={{
						marginLeft: "1em",
					}}>
					If you need to add more information to the object being
					serialized when you override the django_crypto_auth
					Serializer, you can override <b>get_response_data</b> method
					and pass additional context by providing a context argument
					during serializer instantiation. This allows you to include
					arbitrary data that may be relevant for the serialization
					process, such as metadata or other contextual information.
					ex,
				</p>
			</article>,

			<DocsCode>
				{`   ...

    def get_response_data(self, obj: Model) -> dict:

        serializer = self.get_serializer
        my_arg = some_method_or_attribute
        return serializer(obj, context={"arg": my_arg}).data`}
			</DocsCode>,
			<p>
				<strong>Endpoint:</strong>
			</p>,
			<DocsTableView
				body={[
					[
						"/login/",
						"POST",
						<>
							<p>
								If <b>authentication_classes</b> not override
								it, you can use BasicAuthentication Headers
							</p>
							<p>
								{`"Authorization: Basic {base64-encoded-username-and-password}"`}
							</p>
						</>,
						"None",
						<>
							<p>
								"Authorization: Basic
								VXNlclRlc3Q6UGFzc3dvcmRUZXN0=="
							</p>
							<p>UserTest:PasswordTest</p>
						</>,
						"200 Successful",
						"401 Unauthorized",
					],
				]}
			/>,
		],
	},
	updateView: {
		id: "update-view",
		title: "UpdateLoginView",
		data: [
			<p>
				This view handles a <b>refresh_token</b> to renew a logged-in
				user session
			</p>,
			<p>
				Just like the LoginView, if you want to override the serializer,
				you can set the <b>serializer</b> attribute, ex
			</p>,
			<DocsAlertWarning>
				<p>Should be called before the user's token expires!</p>
			</DocsAlertWarning>,
			<DocsCode>
				{`# views.py

...
from crypto_auth.views import LoginView # or your custom view that must inherit from crypto_auth.LoginView

class CustomView(LoginView):
    serializer = CustomSerializer`}
			</DocsCode>,
			<p>
				<strong>Endpoint:</strong>
			</p>,
			<DocsTableView
				body={[
					[
						"/login/update",
						"PUT",
						"Authorization: <CRYPTO_AUTH_TOKEN_KEYWORD> <refresh_token>",
						"None",
						"Authorization: <CRYPTO_AUTH_TOKEN_KEYWORD> 2f3c9a17c8e2c692a46e16bf6a883e9bde82e78e8f7e21e4d245cf07f1b7979a",
						"200 Successful",
						<ul>
							<li>401 Unauthorized</li>
							<li>403 Forbidden</li>
						</ul>,
					],
				]}
			/>,
		],
	},
	logoutView: {
		id: "logout-view",
		title: "LogoutView",
		data: [
			"The LogoutView is responsible for ending the current session of a logged-in user revoking his access tokens",
			<p>
				<strong>Endpoint:</strong>
			</p>,
			<DocsTableView
				body={[
					[
						"/logout/",
						"DELETE",
						"Authorization: <CRYPTO_AUTH_TOKEN_KEYWORD> <token>",
						"None",
						"Authorization: <CRYPTO_AUTH_TOKEN_KEYWORD> 2f3c9a17c8e2c692a46e16bf6a883e9bde82e78e8f7e21e4d245cf07f1b7979a",
						"204 No Content",
						"None",
					],
				]}
			/>,
		],
	},
	logoutAllView: {
		id: "logout-all-view",
		title: "LogoutAllView",
		data: [
			"Similar to the LogoutView, this function will revoke all user's access token, which will log out from all sessions across all devices, not just the current one.",
			<p>
				<strong>Endpoint:</strong>
			</p>,
			<DocsTableView
				body={[
					[
						"/logout/all",
						"DELETE",
						"Authorization: <CRYPTO_AUTH_TOKEN_KEYWORD> <token>",
						"None",
						"Authorization: <CRYPTO_AUTH_TOKEN_KEYWORD> 2f3c9a17c8e2c692a46e16bf6a883e9bde82e78e8f7e21e4d245cf07f1b7979a",
						"204 No Content",
						"None",
					],
				]}
			/>,
		],
	},
};

const navSide: IDocsSideNav = {
	exclude: {
		exclude: [
			"tokenShuffle",
			"serializer",

			"tokenKeyword",
			"tokenLimit",
			"tokenSubsetLength",
			"tokenExpiry",
			"loginView",
			"updateView",
			"logoutView",
			"logoutAllView",
		],
	},
	settings: {
		childs: [
			["crypto_auth_token_shuffle", "CRYPTO_AUTH_TOKEN_SHUFFLE"],
			["crypto_auth_token_serializer", "CRYPTO_AUTH_TOKEN_SERIALIZER"],
			["crypto_auth_token_model", "CRYPTO_AUTH_TOKEN_MODEL"],
			["crypto_auth_token_keyword", "CRYPTO_AUTH_TOKEN_KEYWORD"],
			["crypto_auth_max_token_limit", "CRYPTO_AUTH_MAX_TOKEN_LIMIT"],
			["crypto_auth_subset_length", "CRYPTO_AUTH_SUBSET_LENGTH"],
			["crypto_auth_token_expiry", "CRYPTO_AUTH_TOKEN_EXPIRY"],
		],
	},
	views: {
		childs: [
			["login-view", "LoginView"],
			["update-view", "UpdateLoginView"],
			["logout-view", "LogoutView"],
			["logout-all-view", "LogoutAllView"],
		],
	},
};

const title = "Django Crypto Auth Documentation";

const CryptoAuthDocs = () => {
	return (
		<Docs
			content={content}
			navSide={navSide}
			title={title}
		/>
	);
};

export default CryptoAuthDocs;
