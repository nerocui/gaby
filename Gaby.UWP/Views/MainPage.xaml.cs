using System;

using Gaby.UWP.ViewModels;

using Windows.UI.Xaml.Controls;

namespace Gaby.UWP.Views
{
    public sealed partial class MainPage : Page
    {
        private MainViewModel ViewModel
        {
            get { return ViewModelLocator.Current.MainViewModel; }
        }

        public MainPage()
        {
            InitializeComponent();
        }
    }
}
