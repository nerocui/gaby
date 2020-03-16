using System;

using Gaby.UWP.Services;
using Gaby.UWP.Views;

using GalaSoft.MvvmLight.Ioc;

namespace Gaby.UWP.ViewModels
{
    [Windows.UI.Xaml.Data.Bindable]
    public class ViewModelLocator
    {
        private static ViewModelLocator _current;

        public static ViewModelLocator Current => _current ?? (_current = new ViewModelLocator());

        private ViewModelLocator()
        {
            SimpleIoc.Default.Register(() => new NavigationServiceEx());
            SimpleIoc.Default.Register<ShellViewModel>();
            Register<MainViewModel, MainPage>();
            Register<MapViewModel, MapPage>();
            Register<ImageGalleryViewModel, ImageGalleryPage>();
            Register<ImageGalleryDetailViewModel, ImageGalleryDetailPage>();
            Register<BlankViewModel, BlankPage>();
            Register<SettingsViewModel, SettingsPage>();
        }

        public SettingsViewModel SettingsViewModel => SimpleIoc.Default.GetInstance<SettingsViewModel>();

        public BlankViewModel BlankViewModel => SimpleIoc.Default.GetInstance<BlankViewModel>();

        public ImageGalleryDetailViewModel ImageGalleryDetailViewModel => SimpleIoc.Default.GetInstance<ImageGalleryDetailViewModel>();

        public ImageGalleryViewModel ImageGalleryViewModel => SimpleIoc.Default.GetInstance<ImageGalleryViewModel>();

        public MapViewModel MapViewModel => SimpleIoc.Default.GetInstance<MapViewModel>();

        public MainViewModel MainViewModel => SimpleIoc.Default.GetInstance<MainViewModel>();

        public ShellViewModel ShellViewModel => SimpleIoc.Default.GetInstance<ShellViewModel>();

        public NavigationServiceEx NavigationService => SimpleIoc.Default.GetInstance<NavigationServiceEx>();

        public void Register<VM, V>()
            where VM : class
        {
            SimpleIoc.Default.Register<VM>();

            NavigationService.Configure(typeof(VM).FullName, typeof(V));
        }
    }
}
