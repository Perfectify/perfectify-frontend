import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"perfectify-test","appId":"1:452744951343:web:8782d578185c09ebd438da","storageBucket":"perfectify-test.appspot.com","apiKey":"AIzaSyCMhh3ce1-RoKIxUIhyvmezmN60MMZWgps","authDomain":"perfectify-test.firebaseapp.com","messagingSenderId":"452744951343","measurementId":"G-BCN937J0Y7"})), provideAuth(() => getAuth())]
};
