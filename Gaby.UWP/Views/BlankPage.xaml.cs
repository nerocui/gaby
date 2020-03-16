using System;

using Gaby.UWP.ViewModels;

using Windows.UI.Xaml.Controls;

namespace Gaby.UWP.Views
{
    public sealed partial class BlankPage : Page
    {
        private BlankViewModel ViewModel
        {
            get { return ViewModelLocator.Current.BlankViewModel; }
        }

        public BlankPage()
        {
            InitializeComponent();
        }
    }
}
