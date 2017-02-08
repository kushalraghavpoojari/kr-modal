# kr-modal
A Simple Modal

### Download/Install
  * Bower: `bower install --save kr-modal`

  ```
    <head>
      <link rel="stylesheet" href="/bower_components/kr-modal/styles/kr-modal.css">
    </head>
  ```

  ```
    <body>
      <script src="/bower_components/kr-modal/dist/js/kr-modal.min.js"></script>
    </body>
  ```
Include as dependency

  ```
  angular.module('app',['kr-module']);
  ```

### How To Use
  * Include the css and script files

  * Add `kr-module` as dependency.

#### Example
  > Assuming you want to use hear-beat effect

  ```
  <modal-dialog title="" content="" show=""></modal-dialog>
  ```
  **Options**
  ```
  show = true or false. To hide/ show modal
  title = Title for the modal
  content = Content to be displayed in the modal
  ```
