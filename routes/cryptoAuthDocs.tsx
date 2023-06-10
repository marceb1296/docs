
import React from "react";
import {
    Docs,  
    DocsAlertInfo, 
    DocsAlertWarning, 
    DocsCode, 
    DocsTableStatus, 
    DocsTableTypes, 
    DocsTableView,
    IDocs,
    IDocsSideNav
} from "../src/lib"


const content: IDocs = {
    introduction: {
        id: "introduction",
        title: "Introduction",
        data: [
            "crypto_auth is a Django app to make token based authentication using a refresh token, both encripted with a hash base, making more hard to access an attacker even if the db were compromised.",
            "When successfully authenticated, provide two token for every request; main and refresh one, enabling each user to possess a unique token that gets removed from the server-side once the user re-authenticate or logs out. Accompanied by an expiration key and the user ex.",
            <DocsCode>
                {
`{
    "token": "token",
    "expiry": n,
    "refresh_token": "refresh token",
    "user": "username"
}`
                }
            </DocsCode>,
            "Additionally, the system offers a feature that allows a currently logged-in user to delete all of their stored tokens on the server-side, thereby necessitating the re-authentication of all users.",
            <DocsAlertInfo>
                <p>
                    Only <i><b>token</b></i> is saved on bd, the <i><b>refresh_token</b></i> is created and verified from main token.     
                </p>
            </DocsAlertInfo>
        ]
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
                {
`INSTALLED_APPS = [
    ...
    'crypto_auth',
    ...
]`
                }
            </DocsCode>,
            "And finally run migrate",
            <DocsCode>
                python manage.py migrate
            </DocsCode>
        ]
    },
    settings: {
        title: "Settings"
    },
    tokenModel: {
        id: "crypto_auth_token_model",
        title: "CRYPTO_AUTH_TOKEN_MODEL",
        data: [
            "If for some reason, crypto_auth model isn't enough for you, you can set into your settings your custom model as a string, 'app.model'",
            <DocsCode>
                {
`# settings.py

CRYPTO_AUTH_TOKEN_MODEL = "my_app.my_model"`
                }
            </DocsCode>,
            <DocsCode>
                {
`# models.py

class CustomClass(models.Model):
    key = ...
    ...other fields


    @attribute
    def get_expiry(self):
        # return expiry in seconds, ex. 180

    @attribute
    def get_refresh_token(self):
        # return a refresh token`
                }
            </DocsCode>,
            <DocsAlertWarning>
                 <p>
                    Model must have the field <i><b>key</b></i> and the attributes <i><b>get_expiry</b></i> and <i><b>get_refresh_token</b></i>, this is necessary for crypto_auth Serializer, ex.
                </p>
            </DocsAlertWarning>
        ]
    },
    tokenKeywoard: {
        id: "crypto_auth_token_keywoard",
        title: "CRYPTO_AUTH_TOKEN_KEYWOARD",
        data: [
            <DocsTableTypes body={[
                [
                    "CRYPTO_AUTH_TOKEN_KEYWOARD", 
                    "String", 
                    "Yes", 
                    "Header keywoard to use for authentication.", 
                    "TSESSION"
                ]
            ]} />,
            <p>
                <b>Usage:</b>
            </p>,
            <DocsCode>
                {
                    `curl -X POST -H "Authorization: TSESSION <token | refresh_token>" -H "Content-Type: application/json" -d '{"key1":"value1"}' <endpoint>`
                }
            </DocsCode>,
            <p>
                <b>Response Codes:</b>
            </p>,
            <DocsTableStatus body={[
                [
                    "200", 
                    "Authentication successful"
                ],
                [
                    "401",
                    <>
                        <p>
                            Invalid token header. No credentials provided.
                        </p>
                        <p>
                            Invalid token header. Token string should not contain spaces.
                        </p>
                        <p>
                            Invalid token header. Token string should not contain invalid characters.
                        </p>
                    </>
                ]
            ]} />
        ]
    },
    tokenLimit: {
        id: "crypto_auth_max_token_limit",
        title: "CRYPTO_AUTH_MAX_TOKEN_LIMIT",
        data: [
            <DocsTableTypes body={[
                [
                    "CRYPTO_AUTH_MAX_TOKEN_LIMIT",
                    "Int",
                    "Yes",
                    "Token limit per user",
                    "2"
                ]
            ]} />,
            <p>
                <b>Response Codes:</b>
            </p>,
            <DocsTableStatus body={[
                [
                    "200",
                    "Authentication successful"
                ],
                [
                    "403",
                    "Maximum amount of tokens allowed per user exceeded."
                ]
            ]}/>
        ]
    },
    tokenSubsetLength: {
        id: "crypto_auth_subset_length",
        title: "CRYPTO_AUTH_SUBSET_LENGTH",
        data: [
            <DocsTableTypes body={[
                [
                    "CRYPTO_AUTH_SUBSET_LENGTH",
                    "Int",
                    "Yes",
                    <>
                        <p>
                            Defines the length of a subset taken from the main token <br />used to verify authentication and create a refresh token.
                        </p>
                        <p>
                            Number must be bettwen 2 and 15
                        </p>
                    </>,
                    "4"
                ]
            ]} />
        ]
    },
    tokenExpiry: {
        id: "crypto_auth_token_expiry",
        title: "CRYPTO_AUTH_TOKEN_EXPIRY",
        data: [
            <DocsTableTypes body={[
                [
                    "CRYPTO_AUTH_TOKEN_EXPIRY",
                    "List<keywoard, n> | Tuple<keywoard, n>",
                    "Yes",
                    <>
                        <p>
                            Used to determine the expire time of each token
                        </p>
                        <p>
                            Keyword should be:
                        </p>
                        <ul>
                            <li>
                                seconds
                            </li>
                            <li>
                                minutes 
                            </li>
                            <li>
                                hours
                            </li>
                            <li>
                                days
                            </li>
                            <li>
                                weeks
                            </li>
                        </ul>
                    </>,
                    "('minutes' 3)"
                ]
            ]} />,
            <p>
                <b>Response Codes:</b>
            </p>,
            <DocsTableStatus body={[
                [
                    "200",
                    "Authentication successful"
                ],
                [
                    "401",
                    "Token expired"
                ]
            ]} />
         ]
    },
    serializer: {
        id: "serializer",
        title: "Serializer",
        data: [
            "If you want to customize the Serializer, you need to do it in a view",
            <DocsCode>
                {
`# views.py

...
from crypto_auth.views import LoginView

class CustomView(LoginView):
    serializer = CustomSerializer`
                }
            </DocsCode>
        ]
    },
    views: {
        title: "Views"
    },
    loginView: {
        id: "login-view",
        title: "LoginView",
        data: [
            "This view handles user authentication using Django Rest Framework's DEFAULT_AUTHENTICATION_CLASSES. It accepts a POST request containing the user's credentials and returns a response with a JSON object containing the user's authentication tokens.",
            <DocsCode>
                {
`[
    <class 'rest_framework.authentication.SessionAuthentication'>, 
    <class 'rest_framework.authentication.BasicAuthentication'>
]`
                }
            </DocsCode>,
            <DocsAlertWarning>
                <p>
                    If you're okay with this, be sure to set all security options, such as access only via HTTPS.
                </p>
                <p>
                    Otherwise, set your custom authentication class in your custom view.
                </p>
            </DocsAlertWarning>,
            <DocsCode>
                {
`# views.py

from crypto_auth.views import LoginView
from path.to import CustomAuthentication

class CustomView(LoginView):
    authentication_classes = [CustomAuthentication]`
                }
            </DocsCode>,
            <p>
                <strong>Methods:</strong>
            </p>,
            <p>
                <b>get_response_data</b>
            </p>,
            <p>

                If you need to add more information to the object being serialized when you override the crypto_auth Serializer, you can override <b>get_response_data</b> method and pass additional context by providing a context argument during serializer instantiation. This allows you to include arbitrary data that may be relevant for the serialization process, such as metadata or other contextual information. ex,
            </p>,
            <DocsCode>
                {
`   ...

    def get_response_data(self, obj: Model) -> dict:

        serializer = self.get_serializer
        my_arg = some_method_or_attribute
        return serializer(obj, context={"arg": my_arg}).data`
                }
            </DocsCode>,
            <p>
                <strong>Endpoint:</strong>
            </p>,
            <DocsTableView body={[
                [
                    "/login/",
                    "POST",
                    <>
                        <p>
                            If <b>authentication_classes</b> not override it, you can use BasicAuthentication Headers
                        </p>
                        <p>
                            {`"Authorization: Basic {base64-encoded-username-and-password}"`}
                        </p>
                    </>,
                    "None",
                    <>
                        <p>"Authorization: Basic VXNlclRlc3Q6UGFzc3dvcmRUZXN0=="</p>
                        <p>UserTest:PasswordTest</p>
                        
                    </>,
                    "200 Successful",
                    "401 Unauthorized"
                ]
            ]} />
        ]
    },
    updateView: {
        id: "update-view",
        title: "UpdateLoginView",
        data: [
            <p>
                This view handles a <b>refresh_token</b> to renew a logged-in user session
            </p>,
            <p>
                Just like the LoginView, if you want to override the serializer, you can set the <b>serializer</b> attribute, ex
            </p>,
            <DocsAlertWarning>
                <p>
                    Should be called before the user's token expires!
                </p>
            </DocsAlertWarning>,
            <DocsCode>
                {
`# views.py

...
from crypto_auth.views import LoginView # or your custom view that must inherit from crypto_auth.LoginView

class CustomView(LoginView):
    serializer = CustomSerializer`
                }
            </DocsCode>,
            <p>
                <strong>Endpoint:</strong>
            </p>,
            <DocsTableView body={[
                [
                    "/login/update",
                    "PUT",
                    "Authorization: <CRYPTO_AUTH_TOKEN_KEYWOARD> <refresh_token>",
                    "None",
                    "Authorization: <CRYPTO_AUTH_TOKEN_KEYWOARD> 2f3c9a17c8e2c692a46e16bf6a883e9bde82e78e8f7e21e4d245cf07f1b7979a",
                    "200 Successful",
                    <ul>
                        <li>401 Unauthorized</li>
                        <li>403 Forbidden</li>
                    </ul>
                ]
            ]} />
        ]
    },
    logoutView: {
        id: "logout-view",
        title: "LogoutView",
        data: [
            "The LogoutView is responsible for ending the current session of a logged-in user revoking his access tokens",
            <p>
                <strong>Endpoint:</strong>
            </p>,
            <DocsTableView body={[
                [
                    "/logout/",
                    "DELETE",
                    "Authorization: <CRYPTO_AUTH_TOKEN_KEYWOARD> <token>",
                    "None",
                    "Authorization: <CRYPTO_AUTH_TOKEN_KEYWOARD> 2f3c9a17c8e2c692a46e16bf6a883e9bde82e78e8f7e21e4d245cf07f1b7979a",
                    "204 No Content",
                    "None"
                ]
            ]} />
        ]
    },
    logoutAllView: {
        id: "logout-all-view",
        title: "LogoutAllView",
        data: [
            "Similar to the LogoutView, this function will revoke all user's access token, which will log out from all sessions across all devices, not just the current one.",
            <p>
                <strong>Endpoint:</strong>
            </p>,
            <DocsTableView body={[
                [
                    "/logout/all",
                    "DELETE",
                    "Authorization: <CRYPTO_AUTH_TOKEN_KEYWOARD> <token>",
                    "None",
                    "Authorization: <CRYPTO_AUTH_TOKEN_KEYWOARD> 2f3c9a17c8e2c692a46e16bf6a883e9bde82e78e8f7e21e4d245cf07f1b7979a",
                    "204 No Content",
                    "None"
                ]
            ]} />
        ]
    }
}

const navSide: IDocsSideNav = {
    exclude: {
        exclude: [
            "tokenModel",
            "tokenKeywoard",
            "tokenLimit",
            "tokenSubsetLength",
            "tokenExpiry",
            "loginView",
            "updateView",
            "logoutView",
            "logoutAllView"
        ]
    },
    settings: {
        childs: [
            ["crypto_auth_token_model", "CRYPTO_AUTH_TOKEN_MODEL"],
            ["crypto_auth_token_keywoard", "CRYPTO_AUTH_TOKEN_KEYWOARD"],
            ["crypto_auth_max_token_limit", "CRYPTO_AUTH_MAX_TOKEN_LIMIT"],
            ["crypto_auth_subset_length", "CRYPTO_AUTH_SUBSET_LENGTH"],
            ["crypto_auth_token_expiry", "CRYPTO_AUTH_TOKEN_EXPIRY"]
        ]
    },
    views: {
        childs: [
            ["login-view", "LoginView"],
            ["update-view", "UpdateLoginView"],
            ["logout-view", "LogoutView"],
            ["logout-all-view", "LogoutAllView"]
        ]
    }
}

const title = "Crypto Auth Documentation"

const CryptoAuthDocs = () => {
    return (
        <Docs content={content} navSide={navSide} title={title} />
    );
}
 
export default CryptoAuthDocs;