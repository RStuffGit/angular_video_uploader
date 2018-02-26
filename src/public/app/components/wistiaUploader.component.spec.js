describe('Component: wistiaUploader', function () {

    beforeEach(module('app', 'ngTemplates'));
    describe('with $compile', function () {
        var scope;
        var element;
        beforeEach(inject(function ($rootScope, _$compile_) {
            scope = $rootScope.$new();
            $compile = _$compile_;
            element = angular.element('<wistia-uploader></wistia-uploader>');
            element = $compile(element)(scope);
            scope.$digest();
        }));

        it('should contain input type file', function () {
            var fileUploader = element.find('input[type="file"]');
            expect(!!fileUploader.length).toBeTruthy();
        });
// ...so on
    });


});