# AngularBasicTopics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Bootstrap 5 Styles
Write the next line code to the html file (index.html)
```bash
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

# Forms

## Template Forms vs Reactive Forms

T - Input from HTML File -> `required`
R - Variable from TS File -> `("", Validators.required)`

### Template Forms
Best when the forms are small
All validations will go in the same template

### Reactive Forms
Validations will go in the Typescript file

# Run Aplication and open in explorer
```bash
ng serve -o
```

# Component Generation
```bash
ng generate component component_name
```
>>Ex: 
`ng g c template-form`

* Multiproject
```bash
ng generate component component-name --project=application-name
```
>>Ex: 
`ng g c template-form --project=forms`
`ng g c home --project=routing`

## **Tip** 

* `folder/component-name` you can create a component in a specific `folder`, instead in the `app` folder.
>>Ex:
`ng g c courses/ListCourses --project=modules`
`ng g c shared/navigation --project=modules`
Note: I move the components to pages or components folder.

# Service Generation
```bash
ng generate service service-name
```
>>Ex:  
`ng g s messages`

* Multiproject
```bash
ng generate service service-name --project=project-name
```
>>Ex:\
`ng g s messages --project=basic-concepts`


# Module Generation
```bash
ng generate module module_name
```
>>Ex: 
`ng g m app-routing`

* Multiproject
```bash
ng generate module module-name --project=application-name
```
>>Ex: 
`ng g m shared --project=modules`

## **Tip** 

* `--flat` you create the module in the `app` folder, instead in another folder with the same name as the module.
>>Ex:
`ng g m app-routing --flat --project=modules`

* `--routing` you create the module in the folder with the same name as the module and with a routing module.
>>Ex:
`ng g m blog --routing --project=modules`


# How this project was initialize

## Generate File (First 1)
```bash
ng new workspace-name --create-application=false
```
>>Ex:  
`ng new angular-basic-topics`

## Generate Applications (Then 2)
```bash
ng generate application application-name
```
>>Ex:  
`ng generate application basic-concepts`
`ng generate application forms`
`ng generate application routing`
`ng generate application modules`

## Run Application (Next 3)
```bash
ng serve application-name -o 
```
>>Ex:  
`ng serve forms -o`
