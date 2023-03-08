
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "cordova-plugin-app-version.AppVersionPlugin",
          "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
          "pluginId": "cordova-plugin-app-version",
        "clobbers": [
          "cordova.getAppVersion"
        ]
        },
      {
          "id": "cordova-plugin-inappbrowser.inappbrowser",
          "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
          "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
          "cordova.InAppBrowser.open"
        ]
        },
      {
          "id": "cordova-clipboard.Clipboard",
          "file": "plugins/cordova-clipboard/www/clipboard.js",
          "pluginId": "cordova-clipboard",
        "clobbers": [
          "cordova.plugins.clipboard"
        ]
        },
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "cordova-plugin-local-notification.LocalNotification",
          "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
          "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
          "cordova.plugins.notification.local"
        ]
        },
      {
          "id": "cordova-plugin-screen-orientation.screenorientation",
          "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
          "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
          "cordova.plugins.screenorientation"
        ]
        },
      {
          "id": "cordova-plugin-sms-retriever-manager.AndroidSmsRetriever",
          "file": "plugins/cordova-plugin-sms-retriever-manager/www/smsRetriever.js",
          "pluginId": "cordova-plugin-sms-retriever-manager",
        "clobbers": [
          "cordova.plugins.smsRetriever"
        ]
        },
      {
          "id": "cordova-device-accounts-v2.DeviceAccounts",
          "file": "plugins/cordova-device-accounts-v2/www/DeviceAccounts.js",
          "pluginId": "cordova-device-accounts-v2",
        "clobbers": [
          "DeviceAccounts"
        ]
        },
      {
          "id": "cordova-plugin-firebase-crashlytics.FirebaseCrashlytics",
          "file": "plugins/cordova-plugin-firebase-crashlytics/www/crashlytics.js",
          "pluginId": "cordova-plugin-firebase-crashlytics",
        "clobbers": [
          "FirebaseCrashlytics"
        ]
        },
      {
          "id": "cordova-pdf-generator.pdf",
          "file": "plugins/cordova-pdf-generator/www/pdf.js",
          "pluginId": "cordova-pdf-generator",
        "clobbers": [
          "cordova.plugins.pdf",
          "pugin.pdf",
          "pdf"
        ]
        },
      {
          "id": "cordova-plugin-local-notification.LocalNotification.Core",
          "file": "plugins/cordova-plugin-local-notification/www/local-notification-core.js",
          "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
          "cordova.plugins.notification.local.core",
          "plugin.notification.local.core"
        ]
        },
      {
          "id": "com.razorpay.cordova.RazorpayCheckout",
          "file": "plugins/com.razorpay.cordova/www/RazorpayCheckout.js",
          "pluginId": "com.razorpay.cordova",
        "clobbers": [
          "RazorpayCheckout"
        ]
        },
      {
          "id": "cordova-plugin-x-socialsharing.SocialSharing",
          "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
          "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
          "window.plugins.socialsharing"
        ]
        },
      {
          "id": "cordova-plugin-preview-any-file.PreviewAnyFile",
          "file": "plugins/cordova-plugin-preview-any-file/www/preview.js",
          "pluginId": "cordova-plugin-preview-any-file",
        "clobbers": [
          "window.PreviewAnyFile"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
          "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
          "pluginId": "cordova-plugin-firebase-analytics",
        "merges": [
          "cordova.plugins.firebase.analytics"
        ]
        },
      {
          "id": "cordova-plugin-local-notification.LocalNotification.Util",
          "file": "plugins/cordova-plugin-local-notification/www/local-notification-util.js",
          "pluginId": "cordova-plugin-local-notification",
        "merges": [
          "cordova.plugins.notification.local.core",
          "plugin.notification.local.core"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "mx.ferreyra.callnumber": "0.0.2",
      "com.razorpay.cordova": "0.16.1",
      "cordova-clipboard": "1.3.0",
      "cordova-device-accounts-v2": "2.0.8",
      "cordova-pdf-generator": "2.1.1",
      "cordova-plugin-app-version": "0.1.12",
      "cordova-plugin-badge": "0.8.8",
      "cordova-plugin-firebase-analytics": "6.0.1",
      "cordova-plugin-firebase-crashlytics": "1.2.0",
      "cordova-plugin-inappbrowser": "5.0.0",
      "cordova-plugin-local-notification": "0.9.0-beta.2",
      "cordova-plugin-preview-any-file": "0.2.9",
      "cordova-plugin-screen-orientation": "3.0.2",
      "cordova-plugin-sms-retriever-manager": "1.0.3",
      "cordova-plugin-statusbar": "2.4.3",
      "cordova-plugin-x-socialsharing": "6.0.3",
      "cordova-support-android-plugin": "0.3.7"
    };
    // BOTTOM OF METADATA
    });
    