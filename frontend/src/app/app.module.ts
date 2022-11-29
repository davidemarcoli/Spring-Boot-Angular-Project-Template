import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from '@pages/auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./helper/jwt.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SignupComponent} from '@pages/auth/signup/signup.component';
import {MatLegacySnackBarModule as MatSnackBarModule} from "@angular/material/legacy-snack-bar";
import {CreateCategoryComponent} from '@pages/category/create-category/create-category.component';
import {MatLegacyOptionModule as MatOptionModule} from "@angular/material/legacy-core";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";
import {MatLegacyMenuModule as MatMenuModule} from "@angular/material/legacy-menu";
import {ErrorInterceptor} from "./helper/error.interceptor";
import {CreatePostComponent} from '@pages/post/create-post/create-post.component';
import {ListPostsComponent} from '@pages/post/list-posts/list-posts.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import {DeleteCategoryComponent} from '@pages/category/delete-category/delete-category.component';
import {UpdateCategoryComponent} from '@pages/category/update-category/update-category.component';
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {ViewPostComponent} from '@pages/post/view-post/view-post.component';
import {ColorPickerModule} from "ngx-color-picker";
import { CategoryPillComponent } from '@components/category-pill/category-pill.component';
import { EditPostComponent } from '@pages/post/edit-post/edit-post.component';
import {NgPipesModule} from "ngx-pipes";
import {MatLegacyTooltipModule as MatTooltipModule} from "@angular/material/legacy-tooltip";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateCategoryComponent,
    CreatePostComponent,
    ListPostsComponent,
    DeleteCategoryComponent,
    UpdateCategoryComponent,
    ViewPostComponent,
    CategoryPillComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    CKEditorModule,
    MatCardModule,
    ColorPickerModule,
    NgPipesModule,
    MatTooltipModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
