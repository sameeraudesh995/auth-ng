import {  ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ng-pilot-auth-f6271","appId":"1:514590325027:web:cacdc1fb1eb0d6c6463496","storageBucket":"ng-pilot-auth-f6271.firebasestorage.app","apiKey":"AIzaSyDHZzRAR7qdCms6ye21txmb6QcYs63Fskw","authDomain":"ng-pilot-auth-f6271.firebaseapp.com","messagingSenderId":"514590325027","measurementId":"G-LQV596X6HD"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
