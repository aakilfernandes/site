import modalManager from './modalManager.js'

export default function tokensDirective ($timeout) {
  return {
    scope: {
      tokens: '='
    },
    templateUrl: `/templates/tokens.html`,
    link: ($scope) => {
      $scope.openTransferModal = (token) => {
        modalManager.open({
          modalSize: 'lg',
          templateUrl: '/templates/modals/transfer',
          data: token
        })
      }
    }
  }
}
