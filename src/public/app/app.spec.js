describe('Component: wistiaUploader component', function () {
    beforeEach(module('blueimp.fileupload'));

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope.$new();
        element = angular.element('<wistia-uploader></wistia-uploader>');
        element = $compile(element)(scope);
    }));

    it('should render the text', function() {
        expect(0).toBe(0);
    });


});