import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:permission_handler/permission_handler.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
    DeviceOrientation.landscapeLeft,
    DeviceOrientation.landscapeRight,
  ]);
  runApp(const QM2025App());
}

class QM2025App extends StatelessWidget {
  const QM2025App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Chấm Thi QM 2025 - HCMUE',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF0054A6)),
        useMaterial3: true,
        fontFamily: 'Be Vietnam Pro',
      ),
      home: const MainGradingScreen(),
    );
  }
}

class MainGradingScreen extends StatefulWidget {
  const MainGradingScreen({super.key});

  @override
  State<MainGradingScreen> createState() => _MainGradingScreenState();
}

class _MainGradingScreenState extends State<MainGradingScreen> {
  late final WebViewController _controller;
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _requestPermissions();
    _initWebView();
  }

  Future<void> _requestPermissions() async {
    await [
      Permission.camera,
      Permission.storage,
      Permission.photos,
    ].request();
  }

  void _initWebView() {
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0xFF0054A6))
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageStarted: (String url) {
            setState(() => _isLoading = true);
          },
          onPageFinished: (String url) {
            setState(() => _isLoading = false);
          },
          onWebResourceError: (WebResourceError error) {
            debugPrint('Lỗi tải trang: ${error.description}');
          },
        ),
      )
      // Tải giao diện chấm thi QM2025 offline hoặc từ server nội bộ
      ..loadRequest(Uri.parse('https://tnphet.vercel.app/chamthi.html'));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0054A6),
      body: SafeArea(
        child: Stack(
          children: [
            WebViewWidget(controller: _controller),
            if (_isLoading)
              const Center(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    CircularProgressIndicator(color: Colors.white),
                    SizedBox(height: 16),
                    Text(
                      'Đang khởi động Hệ thống Chấm thi QM2025...',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                    ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}
